import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Stack } from './Stack';

type Props = {
  text: string;
};

export default function AnimatedArrowLinkText({ text }: Props): JSX.Element {
  return (
    <Stack direction="row" gap={1} className="group items-center">
      {text} <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all" />
    </Stack>
  );
}
