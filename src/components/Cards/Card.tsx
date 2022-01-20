import { useState } from 'react';
import { CardDataPropsType } from 'types/cardData';
import {
  Box, Heading, Flex, Text, Spacer,
} from '@chakra-ui/react';
import Image from 'components/Image';
import GenderSvg from './Gender';
import Price from './Price';
import AdditionalImages from './AdditionalImages';

function Card(props: CardDataPropsType) {
  const {
    title, gtin, gender, price, sale_price, image_link, additional_image_link, isSecoundryColor,
  } = props;
  const [isShowMore, setIsShowMoreValue] = useState(false);

  function toggleDisplayMore() {
    setIsShowMoreValue(!isShowMore);
  }

  return (
    <Box borderTop="3px solid" borderColor="gray.300" pt="4" bg={isSecoundryColor ? 'white' : 'blue.50'}>
      <Flex
        onClick={toggleDisplayMore}
        className="pointer"
        pb="4"
        direction={{ base: 'column', sm: 'row' }}
      >
        <Flex align="center" mx={3} direction={{ base: 'column', sm: 'row' }}>
          <Box boxSize="90px">
            <Image
              src={image_link}
              alt={title}
            />
          </Box>
          <Box mx={3}>
            <Flex align="center" my="2">
              <GenderSvg gender={gender} />
              <Heading as="h2" size="sm">{title}</Heading>
            </Flex>
            <Price price={price} sale_price={sale_price} />
          </Box>
        </Flex>
        <Spacer />
        <Text alignSelf="end" color="gray.500" fontSize="xs" mt="2" me="2">{gtin}</Text>
      </Flex>
      {isShowMore && (
        <AdditionalImages
          title={title}
          isSecoundryColor={isSecoundryColor}
          additionalImageLink={additional_image_link}
        />
      )}
    </Box>
  );
}

export default Card;
