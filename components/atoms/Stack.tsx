import { PropsWithChildren, ElementType } from 'react';

type Props<E extends ElementType = ElementType> = PropsWithChildren<{
  as?: E;
  direction?: 'col' | 'row';
  gap?: number;
  className?: string;
  // add additional props here as needed
}>;

export function Stack<E extends ElementType = ElementType>(
  props: Props<E> & React.HTMLAttributes<HTMLDivElement>,
): JSX.Element {
  const {
    as: Component = 'div',
    children,
    direction = 'col',
    gap = 0,
    className = '',
    ...rest
  } = props;

  const classes = `flex flex-${direction} gap-${gap}`;

  return (
    <Component className={`${classes} ${className}`} {...rest}>
      {children}
    </Component>
  );
}
