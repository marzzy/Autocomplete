import {
  useEffect, useState, ChangeEvent, EffectCallback,
} from 'react';
import Papa from 'papaparse';
import { FilterGenderType } from 'types/cardData';
import WorkerBuilder from 'workers/workerBuilder';
import SearchWorker from 'workers/searchWorker';
import FilterWorker from 'workers/filterWorker';

const searchInstance = new WorkerBuilder(SearchWorker);
const filterInstance = new WorkerBuilder(FilterWorker);

function useCardsData() {
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

  searchInstance.onmessage = ({ data }) => {
    setSearchResult(data);
    filterInstance.postMessage({
      currentSearchedResult: data,
      filterType: 'updateSearchedData',
      isCurrentSearchedResultChenged: true,
    });
  };
  filterInstance.onmessage = ({ data }) => {
    setSearchResult(data);
    setIsLoading(false);
  };

  function onSearchValueChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
    setIsLoading(!!(event.target.value));
  }
  function onGenderFilter(value: FilterGenderType): void {
    filterInstance.postMessage({ filterType: 'gender', filterValue: value });
    setIsLoading(true);
  }
  function onSalePriceFilterToggle(isProductsOnSale: boolean): void {
    filterInstance.postMessage({ filterType: 'salePrice', filterValue: isProductsOnSale });
    setIsLoading(true);
  }

  return {
    data: {
      searchResult,
      isLoading,
      isCardsAvailable: searchResult[0].length > 0 && searchValue && !isLoading,
      isNotFound: searchResult[0].length === 0 && searchValue && !isLoading,
    },
    actions: {
      onSearchValueChange,
      onGenderFilter,
      onSalePriceFilterToggle,
    },
  };
}

export default useCardsData;
