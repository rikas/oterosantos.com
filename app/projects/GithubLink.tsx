import { ExternalLink, Stack } from '@components/atoms';
import { GithubIcon } from '@components/icons';

type Props = {
  repo: string;
};

const GithubLink = ({ repo }: Props): JSX.Element => {
  return (
    <Stack direction="row" gap={1} className="items-center">
      <span className="w-5 h-5 dark:fill-white">
        <GithubIcon />
      </span>
      <ExternalLink href={`https://github.com/rikas/${repo}`}>{repo}</ExternalLink>
    </Stack>
  );
};

export default GithubLink;
