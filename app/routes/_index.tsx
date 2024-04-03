import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Learning Remix' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A Better way of keeping tracking of your notes</h1>
      <p>Try our early beta and nver loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try Now</Link>
      </p>
    </main>
  );
}
