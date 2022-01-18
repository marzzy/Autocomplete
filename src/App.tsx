/* eslint-disable react/jsx-no-bind */
import { Header, Input, Cards } from 'components';
import { Box } from '@chakra-ui/react';
import {
  useEffect, useState, ChangeEvent, EffectCallback,
} from 'react';
import Papa from 'papaparse';
import WorkerBuilder from 'workers/workerBuilder';
import SearchWorker from 'workers/searchWorker';

const searchInstance = new WorkerBuilder(SearchWorker);

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [searchResult, setSearchResult] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect((): void => {
    Papa.parse('https://autocomplete.marzzy-codes.com/products.csv', {
      download: true,
      header: true,
      complete(results: any) {
        setCardsData(results.data);
      },
    });
  }, []);

  searchInstance.onmessage = ({ data }) => {
    setSearchResult(data);
    setIsLoading(false);
  };

  function onSearchValueChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
    setIsLoading(!!(event.target.value));
  }

  useEffect((): ReturnType<EffectCallback> => {
    const timeout = setTimeout(
      () => {
        if (searchValue) {
          searchInstance.postMessage({ cardsData, searchValue });
        }
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
      {searchResult[0].length > 0 && searchValue && !isLoading && <Cards data={searchResult} />}
      {searchResult[0].length === 0 && searchValue && !isLoading && <p>not found</p>}
    </Box>
  );
}

export default App;
