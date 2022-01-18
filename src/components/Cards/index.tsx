/* eslint-disable react/jsx-props-no-spreading */
import { SimpleGrid, Box } from '@chakra-ui/react';
import { CardData } from 'types/cardData';
import { MouseEvent, useEffect, useState } from 'react';
import Card from './Card';

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
      <SimpleGrid columns={2} spacing={10}>
        {data[currentPageIndex].map((item: CardData) => (
          <div key={item.gtin}>
            <Card {...item} />
          </div>
        ))}
      </SimpleGrid>
      <div>
        {totalPages > 0 && [...Array(totalPages)].map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <button key={index} type="button" onClick={changePage} data-page={index + 1}>
            {index + 1}
          </button>
        ))}
      </div>
    </Box>
  );
}

export default Cards;
