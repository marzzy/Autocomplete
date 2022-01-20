import {
  Header, Input, Cards, Filters, Loading,
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
    <Box maxW="960px" m="auto">
      <Header />
      <Input onChange={onSearchValueChange} />
      <Filters
        onSalePriceFilterToggle={onSalePriceFilterToggle}
        onGenderFilter={onGenderFilter}
        isDisable={!isCardsAvailable}
      />
      {isLoading && <Loading />}
      {isCardsAvailable && <Cards data={searchResult} />}
      {isNotFound && <p>not found</p>}
    </Box>
  );
}

export default App;
