/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { CardData } from 'types/cardData';
import {
  Box, Heading, Image, Flex, Text, Spacer,
} from '@chakra-ui/react';
import getRandomImagePlaceholder from './utils';
import GenderSvg from './Gender';
import Price from './Price';
import AdditionalImages from './AdditionalImages';

function Card(props: CardData) {
  const {
    title, gtin, gender, price, sale_price, image_link, additional_image_link,
  } = props;
  const randomImagePlaceholder = getRandomImagePlaceholder();
  const [isShowMore, setIsShowMoreValue] = useState(false);

  function toggleDisplayMore() {
    setIsShowMoreValue(!isShowMore);
  }

  return (
    <Box borderTop="1px solid" borderColor="gray.300" pt="4">
      <Flex onClick={toggleDisplayMore} className="pointer" pb="4">
        <Flex align="center" mx={3}>
          <Box boxSize="90px">
            <Image
              src={image_link}
              alt={title}
              objectFit="contain"
              w="90px"
              h="90px"
              fallbackSrc={randomImagePlaceholder}
            />
          </Box>
          <Box mx={3}>
            <Flex align="center">
              <GenderSvg gender={gender} />
              <Heading as="h2" size="sm">{title}</Heading>
            </Flex>
            <Price price={price} sale_price={sale_price} />
          </Box>
        </Flex>
        <Spacer />
        <Text alignSelf="end" color="gray.500" fontSize="xs">{gtin}</Text>
      </Flex>
      {isShowMore && (
        <AdditionalImages additional_image_link={additional_image_link} title={title} />
      )}
    </Box>
  );
}

export default Card;
