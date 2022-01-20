import { Flex } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';

type PaginationPropsTypes = {
  changePage:(selectedItem:{ selected: number }) => void,
  totalPages: number
};

function Paginate(props: PaginationPropsTypes) {
  const { totalPages, changePage } = props;

  return (
    <Flex justify="center" wrap="wrap" my="3">
      <ReactPaginate
        containerClassName="paginate-wrapper"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="Prev"
        activeClassName="current-page"
      />
    </Flex>
  );
}

export default Paginate;
