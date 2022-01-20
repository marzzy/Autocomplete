import {
  SimpleGrid, Box, Button, Flex,
} from '@chakra-ui/react';
import { CardData } from 'types/cardData';
import { MouseEvent, useEffect, useState } from 'react';
import Card from './Card';

function generateUniqkey(index: number) {
  return index + 1;
}

function Cards(props: {data: CardData[][]}) {
  const { data } = props;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(data.length);
  }, [data]);

  function changePage(event: MouseEvent<HTMLElement>) {
    setCurrentPageIndex(Number(event.currentTarget.dataset.page) - 1);
  }

  return (
    <Box my="5">
      <SimpleGrid columns={1} spacing={0}>
        {data[currentPageIndex].map((item: CardData) => (
          <Card {...item} key={item.gtin} />
        ))}
      </SimpleGrid>
      <Flex justify="center">
        {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Button key={index + 1} type="button" onClick={changePage} data-page={index + 1}>
            {index + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}

export default Cards;
