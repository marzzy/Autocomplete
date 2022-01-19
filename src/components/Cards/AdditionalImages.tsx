import {
  Image, Flex,
} from '@chakra-ui/react';
import getRandomImagePlaceholder from './utils';

function AdditionalImages(props : {additional_image_link: string, title: string}) {
  const { additional_image_link, title } = props;
  const imagesSrcs = additional_image_link.split(',');
  const randomImagePlaceholder = getRandomImagePlaceholder();

  if (imagesSrcs && imagesSrcs.length > 0) {
    return (
      <Flex bg="gray.100" p="3">
        {imagesSrcs.map((src) => (
          <Image
            src={src}
            alt={title}
            objectFit="contain"
            w="90px"
            h="90px"
            fallbackSrc={randomImagePlaceholder}
          />
        ))}
      </Flex>
    );
  }
  return null;
}
export default AdditionalImages;
