/* eslint-disable react/jsx-props-no-spreading */
import { SimpleGrid, Box } from '@chakra-ui/react';
import { CardData } from 'types/cardData';
import Card from './Card';

function Cards(props: {data: Array<CardData>}) {
  const { data } = props;

  return (
    <Box my="5">
      <SimpleGrid columns={2} spacing={10}>
        {data.map((item: CardData) => (
          <div key={item.gtin}>
            <Card {...item} />
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Cards;
