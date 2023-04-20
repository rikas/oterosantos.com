import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.BaseHTMLAttributes<HTMLDivElement>>;

export const Article = ({ className, children }: Props): JSX.Element => {
  const classes = `${className} prose prose-zinc dark:prose-invert`;

  return <article className={classes}>{children}</article>;
};
