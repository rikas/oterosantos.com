// SVG icons were copied from here: https://simpleicons.org/

import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { GithubIcon, LinkedinIcon, TwitterIcon } from '@components/icons';

type LinkProps = PropsWithChildren<{
  href: string;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

function LogoLink({ href, className, children }: LinkProps): JSX.Element {
  const twClasses = twMerge(
    'hover:opacity-80 hover:bg-white rounded-full hover:bg-opacity-70 dark:hover:bg-black/20 w-10 p-2',
    className,
  );

  return (
    <a href={href} className={twClasses} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

type LogoProps = {
  href: string;
};

export function Github({ href }: LogoProps) {
  return (
    <LogoLink href={href} className="fill-github dark:fill-slate-50">
      <GithubIcon />
    </LogoLink>
  );
}

export function Linkedin({ href }: LogoProps) {
  return (
    <LogoLink href={href} className="fill-linkedin">
      <LinkedinIcon />
    </LogoLink>
  );
}

export function Twitter({ href }: LogoProps) {
  return (
    <LogoLink href={href} className="fill-twitter">
      <TwitterIcon />
    </LogoLink>
  );
}
