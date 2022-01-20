import { Box, Stack, Spinner } from '@chakra-ui/react';

function Loading() {
  return (
    <Stack direction="row" spacing={4} alignItems="center" h="80vh" justifyContent="center">
      <Spinner size="xl" />
    </Stack>
  );
}

export default Loading;
