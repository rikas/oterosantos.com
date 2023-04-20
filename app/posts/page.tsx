import Image from 'next/image';

import { Article, ExternalLink } from '@components/atoms';

export const metadata = {
  title: 'Latest posts',
};

export default function Page() {
  return (
    <Article>
      <h1>Latest posts</h1>
    </Article>
  );
}
