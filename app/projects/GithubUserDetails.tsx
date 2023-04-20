import { ExternalLink, Stack } from '@components/atoms';
import Image from 'next/image';

export interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  company: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

type Props = {
  user: User;
};

export function GithubUserDetails({ user }: Props) {
  return (
    <ExternalLink
      href={user.html_url}
      className="rounded no-underline hover:bg-white/90 bg-white/60 dark:bg-black/20 hover:dark:bg-black/40"
    >
      <Stack direction="row" className="not-prose px-2 py-4 items-center" gap={2}>
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full flex"
        />

        <Stack className="text-sm" gap={1}>
          <Stack direction="row" gap={1}>
            <span className="not-prose">{user.login}</span>
            <span className="text-black/40 dark:text-white/50 not-prose">{user.name}</span>
          </Stack>
          <small className="not-prose">
            {user.public_repos} repos - {user.followers} followers
          </small>
        </Stack>
      </Stack>
    </ExternalLink>
  );
}
