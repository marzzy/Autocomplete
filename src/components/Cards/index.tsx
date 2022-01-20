import { SimpleGrid, Box } from '@chakra-ui/react';
import { CardData } from 'types/cardData';
import { useEffect, useState } from 'react';
import Paginate from './Paginate';
import Card from './Card';

function Cards(props: {data: CardData[][]}) {
  const { data } = props;
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(data.length);
  }, [data]);

  function changePage(selectedItem: {selected: number}): void {
    setCurrentPageIndex(selectedItem.selected);
  }

  return (
    <Box mb="5">
      <Paginate totalPages={totalPages} changePage={changePage} />
      <SimpleGrid columns={1} spacing={0}>
        {data[currentPageIndex].map((item: CardData, index) => (
          <Card {...item} isSecoundryColor={!!(index % 2)} key={item.gtin} />
        ))}
      </SimpleGrid>
      <Paginate totalPages={totalPages} changePage={changePage} />
    </Box>
  );
}

export default Cards;
