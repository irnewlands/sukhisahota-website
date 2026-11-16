import { copy } from "@/lib/locale";

export default function SkipLink() {
  return (
    <a className="skip-link" href="#main-content">
      {copy("Skip to main content")}
    </a>
  );
}
