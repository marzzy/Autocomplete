import {
  Flex, Text,
} from '@chakra-ui/react';
import { PricePropsType } from 'types/cardData';

function Price(props: PricePropsType) {
  const { price, sale_price } = props;

  return (
    <Flex align="center">
      <Text>
        {`price${' '}:${' '}`}
      </Text>
      {price !== sale_price ? (
        <>
          <Text as="s" fontSize="xs" me="3">{price}</Text>
          <Text as="mark">{sale_price}</Text>
        </>
      ) : (
        <Text>{sale_price}</Text>
      )}
    </Flex>
  );
}

export default Price;
