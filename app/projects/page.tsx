import { Article, Divider, ExternalLink, Stack, Subtitle } from '@components/atoms';
import Image from 'next/image';
import { Octokit } from 'octokit';

import { Sidebar } from '@components/layout';
import { GithubUserDetails, User } from './GithubUserDetails';
import { Repository, TopGitHubProjects } from './TopGithubProjects';
import GithubLink from './GithubLink';
import WebsiteLink from './WebsiteLink';

import megadrive from '../../public/projects/md.oterosantos.com.png';
import TechStack from './TechStack';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const metadata = {
  title: 'Projects',
};

async function getRepos<T>(): Promise<T[]> {
  const { data } = await octokit.rest.repos.listForUser({
    username: 'rikas',
    per_page: 100,
  });

  return data as T[];
}

async function getUser<T>(): Promise<T> {
  const { data } = await octokit.rest.users.getAuthenticated();

  return data as T;
}

export default async function Home(): Promise<JSX.Element> {
  const repos = await getRepos<Repository>();
  const user = await getUser<User>();

  return (
    <>
      <main className="mx-auto p-10">
        <Article>
          <h1>My projects</h1>
          <p>
            Most of the time I work on private projects related to a variety of products, but once
            in a while I find the motivation and time to work on pet projects or OSS, mainly on
            Github.
          </p>

          <section>
            <h2>Megadrive Collection</h2>
            <Stack direction="row" gap={4}>
              <WebsiteLink href="https://md.oterosantos.com/" />
              <GithubLink repo="md.oterosantos.com" />
            </Stack>

            <p>
              I&apos;m an avid retrogame collector, specially SEGA games from the 90s. This small
              project is something that I use to learn new technologies once in a while. The first
              version was a Vue frontend with a Rails API but at this point it&apos;s a Vite project
              with React, using Material UI 5.
            </p>

            <figure className="relative w-full h-72">
              <Image
                src={megadrive}
                quality={80}
                placeholder="blur"
                sizes="100vw"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                alt="Screenshot of megadrive collection"
              />
            </figure>

            <figcaption>
              <TechStack techs={['React', 'Vite', 'Material UI']} />
            </figcaption>
          </section>

          <section>
            <h2>oterosantos.com</h2>
            <Stack direction="row" gap={4}>
              <WebsiteLink href="https://oterosantos.com/" />
              <GithubLink repo="oterosantos.com" />
            </Stack>
          </section>

          <section>
            <h2>Tracinho.com</h2>
          </section>
        </Article>
      </main>

      <Sidebar>
        <Stack gap={10} id="github-information">
          <Stack>
            <Subtitle>Github profile</Subtitle>
            <GithubUserDetails user={user} />
          </Stack>

          <Divider />

          <Stack>
            <Subtitle>Popular repos</Subtitle>
            <TopGitHubProjects
              repos={repos}
              profileURL={user.html_url}
              repoCount={user.public_repos}
            />
          </Stack>
        </Stack>
      </Sidebar>
    </>
  );
}
