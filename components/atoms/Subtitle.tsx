import { PropsWithChildren } from 'react';

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

  return (
    <h4 className={`${defaultClasses} ${noBottomGutter ? '' : 'mb-2'} ${className}`}>{children}</h4>
  );
};
