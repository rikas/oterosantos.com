import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

import { Article } from './atoms';

type Props = {
  code: string;
  frontmatter: Record<string, unknown>;
};

const MDXArticle = ({ code, frontmatter }: Props): JSX.Element => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Article>
      <h1>{frontmatter.title as string}</h1>
      <Component />
    </Article>
  );
};

export default MDXArticle;
