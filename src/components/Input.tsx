import {
  Input, Stack, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

function SearchInput() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
        >
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="choose the product" />
      </InputGroup>
    </Stack>
  );
}

export default SearchInput;
