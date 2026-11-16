import { afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { subscribeToNewsletter } from "./newsletter";

const originalFetch = globalThis.fetch;
const fields = {
  firstName: " Test ",
  lastName: " Example ",
  email: " test@example.invalid ",
};
afterEach(() => {
  globalThis.fetch = originalFetch;
});

test("submits the existing public form fields and accepts explicit success", async () => {
  globalThis.fetch = async (url, init) => {
    assert.equal(
      url,
      "https://assets.mailerlite.com/jsonp/2430134/forms/190139921541891187/subscribe"
    );
    assert.equal(init?.method, "POST");
    assert.equal(init?.credentials, "omit");
    assert.ok(init?.signal);
    const body = init?.body as URLSearchParams;
    assert.deepEqual(Object.fromEntries(body), {
      "fields[name]": "Test",
      "fields[last_name]": "Example",
      "fields[email]": "test@example.invalid",
      "ml-submit": "1",
      anticsrf: "true",
    });
    return Response.json({ success: true });
  };
  assert.equal(await subscribeToNewsletter(fields), "accepted");
});

test("does not report success until the response arrives", async () => {
  let resolveResponse!: (response: Response) => void;
  globalThis.fetch = () =>
    new Promise(resolve => {
      resolveResponse = resolve;
    });
  let settled = false;
  const result = subscribeToNewsletter(fields).then(value => {
    settled = true;
    return value;
  });
  await new Promise(resolve => setTimeout(resolve, 850));
  assert.equal(settled, false);
  resolveResponse(Response.json({ success: true }));
  assert.equal(await result, "accepted");
});

test("recognizes the provider's real HTTP-200 validation-error shape", async () => {
  globalThis.fetch = async () =>
    Response.json({
      success: false,
      errors: { fields: { email: ["The email field is required."] } },
    });
  assert.equal(await subscribeToNewsletter(fields), "invalid_fields");
});

test("rejects unsuccessful, ambiguous, malformed and failed responses", async () => {
  for (const response of [
    Response.json({ success: false }),
    Response.json({ success: "true" }),
    Response.json({}),
    Response.json(null),
    Response.json({ success: true }, { status: 500 }),
    new Response("<html>Service unavailable</html>"),
  ]) {
    globalThis.fetch = async () => response;
    assert.notEqual(await subscribeToNewsletter(fields), "accepted");
  }
});

test("network failure and abort return an unconfirmed result", async () => {
  for (const error of [
    new TypeError("Failed to fetch"),
    new DOMException("Timeout", "AbortError"),
  ]) {
    globalThis.fetch = async () => {
      throw error;
    };
    assert.equal(await subscribeToNewsletter(fields), "unavailable");
  }
});

test("a stalled request is aborted after fifteen seconds", async t => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let signal: AbortSignal | null | undefined;
  globalThis.fetch = (_url, init) => {
    signal = init?.signal;
    return new Promise((_resolve, reject) => {
      signal?.addEventListener(
        "abort",
        () => reject(new DOMException("Timeout", "AbortError")),
        { once: true }
      );
    });
  };
  const result = subscribeToNewsletter(fields);
  t.mock.timers.tick(15000);
  assert.equal(await result, "unavailable");
  assert.equal(signal?.aborted, true);
});
