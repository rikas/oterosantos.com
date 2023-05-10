'use client';

import { SandpackCodeEditor, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

export default function CodeExample(): JSX.Element {
  return (
    <SandpackProvider
      template="react"
      theme={nightOwl}
      files={{
        '/App.js': 'export default function App() { return <h1>Hello world</h1> }',
        '/Button.js': 'export default function Button() {}',
      }}
    >
      <div className="flex flex-col w-full">
        <SandpackCodeEditor />
        <SandpackPreview />
      </div>
    </SandpackProvider>
  );
}
