/* eslint-disable no-param-reassign */
import { CardData, FilterGenderType } from 'types/cardData';

let searchedResult = [[]];
let flattedSearchedResult: CardData[] = [];

function filterWorker() {
  const appliedFilters: {gender: FilterGenderType, salePrice: boolean} = {
    gender: 'all',
    salePrice: false,
  };
  onmessage = (message) => {
    const {
      currentSearchedResult, filterType, filterValue, isCurrentSearchedResultChenged,
    } = message.data;

    if (isCurrentSearchedResultChenged) {
      searchedResult = currentSearchedResult;
      flattedSearchedResult = currentSearchedResult.flat();
    }

    function paginateCards(cards: CardData[]) {
      let currentPage = 0;

      return cards.reduce((paginatedDetails: CardData[][], item: CardData, index: number) => {
        if (index === 0 || index % 100 !== 0) {
          paginatedDetails[currentPage].push(item);
        } else {
          currentPage += 1;
          paginatedDetails[currentPage] = [item];
        }
        return paginatedDetails;
      }, [[]]);
    }

    function filterByGender(value: FilterGenderType) {
      appliedFilters.gender = value;
      if (value === 'all') {
        return searchedResult;
      }
      return paginateCards(flattedSearchedResult.filter((item) => item.gender === value));
    }

    function filterBySalePrice(flatedData: CardData[], isOnSale: boolean) {
      appliedFilters.salePrice = isOnSale;
      if (isOnSale) {
        return paginateCards(flatedData.filter((item) => {
          const salePriceValue = +item.sale_price.split(' ')[0];
          const priceValue = +item.price.split(' ')[0];
          return salePriceValue < priceValue;
        }));
      }
      return paginateCards(flatedData);
    }

    switch (filterType) {
      case 'gender': {
        const filteredByGender = filterByGender(filterValue);
        if (appliedFilters.salePrice) {
          postMessage(filterBySalePrice(filteredByGender.flat(), true));
          break;
        }
        postMessage(filteredByGender);
        break;
      }
      case 'salePrice': {
        if (appliedFilters.gender === 'all') {
          postMessage(filterBySalePrice(flattedSearchedResult, filterValue));
          break;
        }
        postMessage(filterBySalePrice(filterByGender(appliedFilters.gender).flat(), filterValue));
        break;
      }
      case 'updateSearchedData': {
        if (appliedFilters.gender === 'all') {
          if (appliedFilters.salePrice) {
            postMessage(filterBySalePrice(flattedSearchedResult, true));
            break;
          }
          postMessage(searchedResult);
          break;
        }
        const filteredByGender = filterByGender(appliedFilters.gender);
        if (appliedFilters.salePrice) {
          postMessage(filterBySalePrice(filteredByGender.flat(), true));
          break;
        }
        postMessage(filteredByGender);
        break;
      }
      default:
        postMessage(searchedResult);
        return true;
    }
    return false;
  };
}

export default filterWorker;
