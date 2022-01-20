import { useState } from 'react';
import {
  Radio, RadioGroup, Stack, Flex, Text,
} from '@chakra-ui/react';
import { FilterGenderType } from 'types/cardData';

type GenderFilterPropsType = {
  onGenderFilter: (value: FilterGenderType) => void,
  isDisable: boolean,
}

function GenderFilterBox(props: GenderFilterPropsType) {
  const { onGenderFilter, isDisable } = props;
  const [val, setValue] = useState<FilterGenderType>('all');

  function handleGenderFilterChange(selectedValue: FilterGenderType) {
    setValue(selectedValue);
    onGenderFilter(selectedValue);
  }

  return (
    <Flex
      my="1"
      alignItems="center"
      justifyContent="space-around"
      w={{ base: '100%', sm: 'auto' }}
    >
      <Text pe="2" fontSize="lg" fontWeight="bold">
        Gender:
      </Text>
      <RadioGroup onChange={handleGenderFilterChange} value={val}>
        <Stack direction={{ base: 'column', sm: 'row' }}>
          <Radio value="all" isDisabled={isDisable}>All</Radio>
          <Radio value="unisex" isDisabled={isDisable}>Unisex</Radio>
          <Radio value="female" isDisabled={isDisable}>Femlae</Radio>
          <Radio value="male" isDisabled={isDisable}>Male</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
}

export default GenderFilterBox;
