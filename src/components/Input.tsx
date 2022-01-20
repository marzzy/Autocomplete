import {
  Input, Flex, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { ChangeEvent } from 'react';

type PropsType = { onChange: (event: ChangeEvent<HTMLInputElement>) => void };

function SearchInput(props: PropsType) {
  const { onChange } = props;

  return (
    <Flex direction="column">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
        >
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="choose the product" onChange={onChange} size="lg" bg="White" />
      </InputGroup>
    </Flex>
  );
}

export default SearchInput;
