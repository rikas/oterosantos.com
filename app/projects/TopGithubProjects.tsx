import { ExternalLink, Stack } from '@components/atoms';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  private: boolean;
  description: string;
  language: string;
  visibility: 'public' | 'private';
}

type Props = {
  repos: Repository[];
  profileURL: string;
  repoCount: number;
};

export function TopGitHubProjects({ repos, profileURL, repoCount }: Props) {
  function repoSorter(repoA: Repository, repoB: Repository) {
    return (repoB.stargazers_count || 0) - (repoA.stargazers_count || 0);
  }
  const topRepos = repos.sort(repoSorter).slice(0, 10);

  return (
    <ol className="list-none text-zinc-600 dark:text-zinc-400">
      {topRepos.map((repo) => (
        <li key={repo.id}>
          <Stack as="span" direction="row" gap={2} className="inline-flex mb-2">
            <ExternalLink href={repo.html_url}>{repo.name}</ExternalLink>
            <Stack direction="row" className="text-xs items-center" gap={0.5}>
              {repo.stargazers_count}
              <StarIcon className="w-3 h-3 fill-yellow-500 dark:fill-yello-200" />
            </Stack>
          </Stack>
        </li>
      ))}
      <li className="mt-2">
        <ExternalLink href={profileURL} className="text-sm" variant="gray">
          <Stack direction="row" gap={1} className="items-end">
            See all {repoCount} repositories <ArrowRightIcon className="w-4 h-4" />
          </Stack>
        </ExternalLink>
      </li>
    </ol>
  );
}
