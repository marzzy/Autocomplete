/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import getRandomImagePlaceholder from './utils';

type ImagePropsType = {
  src: string,
  alt: string,
}

const randomImagePlaceholder = getRandomImagePlaceholder();

function AsyncImage(props: ImagePropsType) {
  const { src, alt } = props;
  const [loadedSrc, setLoadedSrc] = useState('');

  useEffect(() => {
    setLoadedSrc('');
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };

      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = src;

      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [src]);

  if (loadedSrc === src) {
    return (
      <ChakraImage
        src={loadedSrc}
        alt={alt}
        objectFit="contain"
        w="90px"
        h="90px"
      />
    );
  }
  return (
    <ChakraImage
      src={randomImagePlaceholder}
      alt="default-product-image"
      objectFit="contain"
      w="90px"
      h="90px"
    />
  );
}

export default AsyncImage;
