import { Flex } from '@chakra-ui/react';
import Image from 'components/Image';

function AdditionalImages(props : {additional_image_link: string, title: string}) {
  const { additional_image_link, title } = props;
  const imagesSrcs = additional_image_link.split(',');

  if (imagesSrcs && imagesSrcs.length > 0) {
    return (
      <Flex bg="gray.100" p="3">
        {imagesSrcs.map((src) => (
          <Image src={src} alt={title} />
        ))}
      </Flex>
    );
  }
  return null;
}
export default AdditionalImages;
