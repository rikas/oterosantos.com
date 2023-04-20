import { PropsWithChildren } from 'react';
import { StyledLinkProps, StyledLink } from './StyledLink';

type ExternalLinkProps = PropsWithChildren<{
  href: string;
}> &
  StyledLinkProps;

export const ExternalLink = ({ children, href, ...props }: ExternalLinkProps): JSX.Element => {
  return (
    <StyledLink href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </StyledLink>
  );
};
