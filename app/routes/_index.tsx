import { Box } from '@chakra-ui/react';
import type { MetaFunction } from '@remix-run/node';
import Navbar from '~/components/resuseable/Navbar';

export const meta: MetaFunction = () => {
  return [
    { title: 'Learning Remix' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Box p={8} id="content"></Box>
    </>
  );
}
