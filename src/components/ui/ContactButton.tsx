interface ContactButtonProps {
  href?: string;
  className?: string;
}

const buttonClasses =
  'contact-button inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export function ContactButton({ href, className = '' }: ContactButtonProps) {
  if (href) {
    return (
      <a className={`${buttonClasses} ${className}`} href={href}>
        Contact Me
      </a>
    );
  }

  return (
    <button
      className={`${buttonClasses} ${className} cursor-default`}
      type="button"
      disabled
      aria-disabled="true"
      title="Contact destination is not configured"
    >
      Contact Me
    </button>
  );
}
