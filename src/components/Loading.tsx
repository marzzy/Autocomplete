import { Stack, Spinner } from '@chakra-ui/react';

function Loading() {
  return (
    <Stack direction="row" spacing={4} alignItems="center" pt="50" justifyContent="center">
      <Spinner size="xl" />
    </Stack>
  );
}

export default Loading;
