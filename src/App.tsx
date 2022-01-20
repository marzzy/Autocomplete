import {
  Header, Input, Cards, Filters, Loading, NotFound,
} from 'components';
import { Box } from '@chakra-ui/react';
import useCardsData from 'hooks/cardDataManagment';

function App() {
  const {
    data: {
      searchResult,
      isLoading,
      isCardsAvailable,
      isNotFound,
    },
    actions: {
      onSearchValueChange,
      onGenderFilter,
      onSalePriceFilterToggle,
    },
  } = useCardsData();

  return (
    <Box maxW="960px" m="auto" px="4">
      <Header />
      <Box bg="blue.200" p="5" borderRadius="7">
        <Filters
          onSalePriceFilterToggle={onSalePriceFilterToggle}
          onGenderFilter={onGenderFilter}
          isDisable={!isCardsAvailable}
        />
        <Input onChange={onSearchValueChange} />
      </Box>
      {isLoading && <Loading />}
      {isCardsAvailable && <Cards data={searchResult} />}
      {isNotFound && <NotFound />}
    </Box>
  );
}

export default App;
