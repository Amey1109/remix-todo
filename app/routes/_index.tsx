import type { MetaFunction } from '@remix-run/node';
export const meta: MetaFunction = () => {
  return [
    { title: 'Learning Remix' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <>Test Index</>;
}
