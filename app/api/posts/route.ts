import type { NextApiRequest, NextApiResponse } from 'next';
import { bundleMDX } from 'mdx-bundler';

export async function handler(_req: NextApiRequest, res: NextApiResponse) {
  console.log('I AM READING A POST');
  const mdxSource = `
    ---
    title: Example Post
    published: 2021-02-13
    description: This is some description
    ---

    # Wahoo

    import Demo from './demo'

    Here's a **neat** demo:

    <Demo />
  `.trim();

  const source = await bundleMDX({
    source: mdxSource,
    files: {
      './demo.tsx': `
        import * as React from 'react'

        function Demo() {
          return <div>Neat demo!</div>
        }

        export default Demo
      `,
    },
  });

  const { code, frontmatter } = source;

  res.status(200).json({ code, frontmatter });
}
