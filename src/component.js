import React from 'react';

import Header from './components/header';

function Component() {
  return (
    <>
      <Header />
      <Content />
      <Header />
      <Header />
      <Header />
      <Content />
      <Content />
      <Content />
    </>
  );
}

function Content() {
  return (
    <div>
      <h1>This Is A Content</h1>
      <button>Click Me</button>
    </div>
  );
}

export default Component;
