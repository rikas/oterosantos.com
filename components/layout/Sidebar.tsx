import { PropsWithChildren } from 'react';

import { Stack } from '@components/atoms';
import Socialbar from './Socialbar';

export const Sidebar = ({ children }: PropsWithChildren): JSX.Element => (
  <aside id="sidebar" className="bg-blue-100 dark:bg-dark-700 flex w-64">
    <Stack className="flex flex-col p-6 pt-10 grow">
      {children}
      <div className="flex flex-col justify-end grow mt-10">
        <Socialbar />
      </div>
    </Stack>
  </aside>
);
