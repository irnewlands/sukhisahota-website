import { ArrowUpRight } from "lucide-react";

/**
 * Homepage announcement, modelled on Sean's prominent yellow voting notice.
 * Links to an independent personal reflection, not a BC NDP announcement.
 */
export default function ElectionReflectionBanner() {
  return (
    <a
      href="/after-the-election"
      aria-label="Read Sukhi Sahota's reflections on the 2026 British Columbia election"
      className="group sticky top-16 z-40 block w-full border-y-[3px] border-[#c51f2f] bg-[#ffd400] px-4 py-3 text-[#641b25] no-underline shadow-sm transition-colors hover:bg-[#ffe044] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#641b25]"
    >
      <span className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center md:justify-between">
        <span className="flex flex-wrap items-center justify-center gap-2.5 text-sm font-bold leading-snug md:text-base">
          <span className="rounded-sm bg-[#641b25] px-2 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white">
            New reflection
          </span>
          <span>BC Election 2026: After the defeat, it's time for an honest conversation.</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-extrabold underline underline-offset-4 group-hover:no-underline md:text-base">
          Read my reflections <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
