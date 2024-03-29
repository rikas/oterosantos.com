import { PropsWithChildren } from 'react';
import { Sidebar } from '@components/layout';

export default function Home(): JSX.Element {
  return (
    <>
      <main className="mx-auto p-10">Hello World</main>
      <Sidebar>
        <h2>Ricardo Otero</h2>

        <p>
          Freelance web developer, working with Ruby and Ruby on Rails for 10+ years and fluent in
          React and Vuejs. This is where I write about my projects and share interesting stuff about
          programming in general.
        </p>
      </Sidebar>
    </>
  );
}
