import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PropsWithChildren<React.BaseHTMLAttributes<HTMLDivElement>>;

export const Article = ({ className, children }: Props): JSX.Element => {
  const classes = twMerge('prose prose-zinc dark:prose-invert', className);

  return <article className={classes}>{children}</article>;
};
