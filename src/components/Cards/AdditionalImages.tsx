import { Flex, Text, Stack } from '@chakra-ui/react';
import Image from 'components/Image';

type AdditionalImagesPropsTypes = {
  additionalImageLink: string, title: string, isSecoundryColor: boolean
};

function AdditionalImages(props : AdditionalImagesPropsTypes) {
  const { additionalImageLink, title, isSecoundryColor } = props;
  const imagesSrcs = additionalImageLink.split(',');

  if (additionalImageLink && imagesSrcs && imagesSrcs.length > 0) {
    return (
      <Flex p="3" bg={isSecoundryColor ? 'gray.50' : 'blue.100'}>
        {imagesSrcs.map((src) => (
          <Image src={src} alt={title} />
        ))}
      </Flex>
    );
  }
  return (
    <Stack
      p="3"
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="center"
      bg={isSecoundryColor ? 'gray.50' : 'blue.100'}
    >
      <Text fontSize="lg" fontWeight="bold">Sorry, no additional image found</Text>
    </Stack>
  );
}
export default AdditionalImages;
