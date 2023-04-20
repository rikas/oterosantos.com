import { Subtitle } from '@components/atoms';
import { Sidebar } from '@components/layout';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="mx-auto p-10">{children}</main>
      <Sidebar>
        <Subtitle>Quick bio</Subtitle>

        <p>
          Freelance web developer, working with Ruby and Ruby on Rails for 10+ years and fluent in
          React and Vuejs. This is where I write about my projects and share interesting stuff about
          programming in general.
        </p>
      </Sidebar>
    </>
  );
}
