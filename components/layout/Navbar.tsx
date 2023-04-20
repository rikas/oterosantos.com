import { Stack, StyledLink } from '@components/atoms';
import DarkmodeToggle from './DarkmodeToggle';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="flex items-center py-4 pl-10 pr-6">
      <StyledLink variant="nav" href="/" className="font-extrabold text-xl">
        Ricardo Otero
      </StyledLink>

      <ul className="flex gap-5 ml-10">
        <li>
          <StyledLink variant="nav" href="/posts">
            Posts
          </StyledLink>
        </li>
        <li>
          <StyledLink variant="nav" href="/projects">
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink variant="nav" href="/about">
            About
          </StyledLink>
        </li>
      </ul>

      <div className="flex grow justify-end">
        <DarkmodeToggle />
      </div>
    </nav>
  );
};
