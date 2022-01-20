export type GenderType = 'female' | 'male' | 'unisex';

export type FilterGenderType = GenderType | 'all';

export type PricePropsType = { price: string, sale_price: string };

export type CardDataPropsType = {
  title: string,
  gtin: string,
  gender: GenderType,
  price: string,
  sale_price: string,
  image_link: string,
  additional_image_link: string,
  isSecoundryColor: boolean
}

export type CardData = {
  title: string,
  gtin: string,
  gender: GenderType,
  price: string,
  sale_price: string,
  image_link: string,
  additional_image_link: string
}
