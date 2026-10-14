import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
}

const buttonClasses =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] sm:px-10 sm:py-3.5 sm:text-base';

export function LiveProjectButton({ href }: LiveProjectButtonProps) {
  const content = (
    <>
      Live Project
      <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
    </>
  );

  if (href) {
    return (
      <a className={buttonClasses} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${buttonClasses} cursor-default`}
      type="button"
      disabled
      aria-disabled="true"
      title="Live project destination is not configured"
    >
      {content}
    </button>
  );
}
