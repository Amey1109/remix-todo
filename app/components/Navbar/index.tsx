'use client';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { NavLink } from '@remix-run/react';
import { Book, Moon, Sun } from 'react-feather';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            width={'100%'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={10}
          >
            <Flex flexDirection={'row'} gap={3}>
              <Book />
              <Text fontSize="xl">
                <NavLink to="/">
                  <ChakraLink>Jot It Down</ChakraLink>
                </NavLink>
              </Text>
            </Flex>
            <Flex gap={5}>
              <ChakraLink as={NavLink} to="/">
                Home
              </ChakraLink>
              <ChakraLink as={NavLink} to="/notes">
                My Notes
              </ChakraLink>
            </Flex>
          </Flex>
          <Flex
            w={100}
            h={16}
            flexDirection={'row'}
            alignItems={'center'}
            gap={6}
          ></Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <Moon /> : <Sun />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
