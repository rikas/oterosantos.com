import { ExternalLink, Stack } from '@components/atoms';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

type Props = {
  href: string;
};

const WebsiteLink = ({ href }: Props): JSX.Element => {
  return (
    <Stack direction="row" gap={1} className="items-center">
      <GlobeAltIcon className="w-5 h-5" />
      <ExternalLink href={href}>{href}</ExternalLink>
    </Stack>
  );
};

export default WebsiteLink;
