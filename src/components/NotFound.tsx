import { Stack, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Stack direction="row" spacing={4} alignItems="center" pt="50" justifyContent="center">
      <Text fontSize="4xl">404</Text>
      <br />
      <Text fontSize="lg">Ops! Not found any product!!</Text>
    </Stack>
  );
}

export default NotFound;
