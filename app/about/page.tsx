import Image from 'next/image';

import { Article, ExternalLink } from '@components/atoms';

export const metadata = {
  title: 'About Ricardo Otero',
};

export default function Page() {
  return (
    <Article>
      <h1>About me</h1>

      <div className="float-left mr-6 mb-2">
        <Image src="/ricardo_otero.jpg" height={608 / 3} width={514 / 3} alt="Ricardo Otero" />
      </div>

      <p>Hi, my name is Ricardo Otero.</p>

      <p>Born in Coimbra, Portugal, I&apos;m a software engineer based in Lisbon, Portugal.</p>

      <p>
        I have a masters degree in Computer Science but I&apos;ve been into web development way
        before that. I taught myself Perl then PHP and ended up falling in love with Ruby.
      </p>

      <p>
        I&apos;m working mainly with Ruby and Ruby on Rails since 2007, but I always try to learn
        new things, so I&apos;ve been more into the inevitable world of Javascript recently
        (specially <ExternalLink href="https://reactjs.org/">React</ExternalLink> and{' '}
        <ExternalLink href="https://vuejs.org/">Vuejs</ExternalLink>).
      </p>

      <p>
        I&apos;ve worked in different companies over the years and I always gravitate towards the
        startup scene. After co-founding and being the CTO of my own startup for 3 years I now work
        as a <strong> freelance web developer</strong> working remote first.
      </p>

      <p>
        I also teach at <ExternalLink href="https://www.lewagon.com/lisbon">Le Wagon</ExternalLink>,
        a code bootcamp, in Lisbon. Helping people to completely change their careers teaching
        things that I love is just perfect!
      </p>

      <p>
        This site is fully static, running on{' '}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>, and hosted on{' '}
        <ExternalLink href="https://pages.github.com/">GitHub Pages</ExternalLink>. The source code
        is publicly available, so if you see something that&apos;s incorrect, please submit a pull
        request.
      </p>

      <p>
        I tend to write about things that I&apos;m currently working on or learning. Topics vary
        quite a bit, but just about everything is programmer flavored. Here&apos;s a small sample of
        some posts that I wrote that I enjoy.
      </p>

      <p>Thanks for stopping by!</p>
    </Article>
  );
}
