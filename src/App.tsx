/* eslint-disable react/jsx-no-bind */
import { Header, Input, Cards } from 'components';
import { Box } from '@chakra-ui/react';
import {
  useEffect, useState, ChangeEvent, EffectCallback,
} from 'react';
import { CardData } from 'types/cardData';
import Papa from 'papaparse';

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect((): void => {
    Papa.parse('https://autocomplete.marzzy-codes.com/products.csv', {
      download: true,
      header: true,
      complete(results: any) {
        // console.log('Finished:', results.data);
        setCardsData(results.data);
      },
    });
  }, []);

  function onSearchValueChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
    setIsLoading(true);
  }

  useEffect((): ReturnType<EffectCallback> => {
    const timeout = setTimeout(
      () => {
        const result = cardsData.filter(
          (item: CardData) => item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setSearchResult(result);
        setIsLoading(false);
      },
      1000,
    );
    return (): void => {
      clearTimeout(timeout);
    };
  }, [searchValue]);

  return (
    <Box maxW="960px" m="auto">
      <Header />
      <Input onChange={onSearchValueChange} />
      {isLoading && <p>loading...</p>}
      {searchResult.length > 0 && searchValue && !isLoading && <Cards data={searchResult} />}
      {searchResult.length === 0 && searchValue && !isLoading && <p>not found</p>}
    </Box>
  );
}

export default App;
