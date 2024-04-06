'use client';

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { Book, Moon, Sun } from 'react-feather';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex flexDirection={'row'} alignItems={'center'} gap={3}>
            <Book />
            <Text fontSize="xl">Notes App</Text>
          </Flex>
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
