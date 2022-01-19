import {
  Image, Flex,
} from '@chakra-ui/react';
import { GenderType } from 'types/cardData';
import FemaleSvg from 'assets/female.svg';
import MaleSvg from 'assets/male.svg';

function GenderSvg(props: {gender: GenderType}) {
  const { gender } = props;
  const SvgSrcs = {
    female: [FemaleSvg],
    male: [MaleSvg],
    unisex: [FemaleSvg, MaleSvg],
  };

  if (SvgSrcs[gender]) {
    return (
      <Flex me={3} shrink="0">
        {SvgSrcs[gender].map((src) => (
          <Image src={src} alt={gender} />
        ))}
      </Flex>
    );
  }
  return null;
}

export default GenderSvg;
