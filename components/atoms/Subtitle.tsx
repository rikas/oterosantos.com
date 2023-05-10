import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = PropsWithChildren<{
  noBottomGutter?: boolean;
}> &
  React.HTMLAttributes<HTMLHeadingElement>;

export const Subtitle = ({
  children,
  noBottomGutter = false,
  className = '',
}: Props): JSX.Element => {
  const defaultClasses = 'tracking-widest uppercase text-yellow-600 dark:text-yellow-400';

  const twClasses = twMerge(defaultClasses, noBottomGutter ? '' : 'mb-2', className);

  return <h4 className={twClasses}>{children}</h4>;
};
