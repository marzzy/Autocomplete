/* eslint-disable no-param-reassign */
import { CardData } from 'types/cardData';

function searchWorker() {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (message) => {
    const { cardsData, searchValue } = message.data;
    const pureData = cardsData.filter(
      (item: CardData) => item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    let currentPage = 0;

    const res = pureData.reduce((paginatedDetails: CardData[][], item: CardData, index: number) => {
      if (index === 0 || index % 100 !== 0) {
        paginatedDetails[currentPage].push(item);
      } else {
        currentPage += 1;
        paginatedDetails[currentPage] = [item];
      }
      return paginatedDetails;
    }, [[]]);

    postMessage(res);
  };
}

export default searchWorker;
