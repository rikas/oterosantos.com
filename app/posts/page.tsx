import Image from 'next/image';

import { Article, ExternalLink } from '@components/atoms';
import CodePlayground from '@components/CodePlayground';

export const metadata = {
  title: 'Latest posts',
};

export default function Page() {
  return (
    <Article>
      <h1>Latest posts</h1>

      <CodePlayground />
    </Article>
  );
}
