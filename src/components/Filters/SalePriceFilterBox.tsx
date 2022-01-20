import { Checkbox } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type SalePriceFilterPropsType = {
  onSalePriceFilterToggle: (value: boolean) => void,
  isDisable: boolean,
}
function SalePriceFilterBox(props: SalePriceFilterPropsType) {
  const { onSalePriceFilterToggle, isDisable } = props;

  function handleSalePriceFilterToggle(event: ChangeEvent<HTMLInputElement>) {
    onSalePriceFilterToggle(event.target.checked);
  }

  return (
    <Checkbox
      isDisabled={isDisable}
      onChange={handleSalePriceFilterToggle}
      my="1"
      size="lg"
      fontWeight="700"
    >
      Products on Sale
    </Checkbox>
  );
}

export default SalePriceFilterBox;
