import { useState } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
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
    <RadioGroup onChange={handleGenderFilterChange} value={val}>
      <Stack direction="row">
        <Radio value="all" isDisabled={isDisable}>All</Radio>
        <Radio value="unisex" isDisabled={isDisable}>Unisex</Radio>
        <Radio value="female" isDisabled={isDisable}>Femlae</Radio>
        <Radio value="male" isDisabled={isDisable}>Male</Radio>
      </Stack>
    </RadioGroup>
  );
}

export default GenderFilterBox;
