/* eslint-disable react/jsx-props-no-spreading */
import { SimpleGrid, Box } from '@chakra-ui/react';
import { CardData } from 'types/cardData';
import { MouseEvent, useEffect, useState } from 'react';
import Card from './Card';

function getPaginatedData(pureData: CardData[]): CardData[][] {
  let currentPage = 0;

  return pureData.reduce((paginatedDetails: CardData[][], item: CardData, index: number) => {
    let currentData = JSON.parse(JSON.stringify(paginatedDetails));

    if (index === 0) {
      currentData = [[item]];
    } else if (index % 20 !== 0) {
      currentData[currentPage].push(item);
    } else {
      currentPage += 1;
      currentData[currentPage] = [item];
    }
    return currentData;
  }, []);
}

function Cards(props: {data: Array<CardData>}) {
  const { data } = props;
  const [paginatedData, setPaginatedData] = useState(getPaginatedData(data));
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(paginatedData.length);
  }, [paginatedData]);

  function changePage(event: MouseEvent<HTMLElement>) {
    setCurrentPageIndex(Number(event.currentTarget.dataset.page) - 1);
  }

  return (
    <Box my="5">
      <SimpleGrid columns={2} spacing={10}>
        {paginatedData[currentPageIndex].map((item: CardData) => (
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
