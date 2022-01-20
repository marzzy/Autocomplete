import { Flex, Box, Heading } from '@chakra-ui/react';
import { FilterGenderType } from 'types/cardData';
import GenderFilter from './GenderFilterBox';
import SalePriceFilter from './SalePriceFilterBox';

type FilterPropsType = {
  onGenderFilter: (value: FilterGenderType) => void,
  onSalePriceFilterToggle: (value: boolean) => void,
  isDisable: boolean,
}
function FilterBox(props: FilterPropsType) {
  const { onGenderFilter, onSalePriceFilterToggle, isDisable } = props;

  return (
    <Flex justifyContent="space-around" direction={{ base: 'column', sm: 'row' }} alignItems="center" wrap="wrap">
      <GenderFilter
        onGenderFilter={onGenderFilter}
        isDisable={isDisable}
      />
      <SalePriceFilter
        isDisable={isDisable}
        onSalePriceFilterToggle={onSalePriceFilterToggle}
      />
    </Flex>
  );
}

export default FilterBox;
