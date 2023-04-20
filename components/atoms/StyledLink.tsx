import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const LinkStyles = {
  base: 'text-sky-600 hover:text-sky-400 dark:text-sky-400 hover:dark:text-sky-600',
  nav: 'text-zinc-800 hover:text-zinc-600 dark:text-yellow-100 hover:dark:text-yellow-300',
  gray: 'text-black/50 hover:text-black/60 dark:text-white/50 dark:hover:text-white/40',
};

export type StyledLinkProps = PropsWithChildren<{
  href: string;
  variant?: keyof typeof LinkStyles;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const StyledLink = ({
  href,
  className,
  variant = 'base',
  children,
  ...otherProps
}: StyledLinkProps): JSX.Element => {
  return (
    <Link href={href} className={`${className} ${LinkStyles[variant]}`} {...otherProps}>
      {children}
    </Link>
  );
};
