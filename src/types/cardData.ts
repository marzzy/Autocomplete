export type CardData = {
  title: string,
  gtin: string,
  gender: 'female' | 'male' | 'unisex' | 'not-set',
  price: string,
  sale_price: string,
  image_link: string,
  additional_image_link: Array<string>
}