import { CardData } from 'types/cardData';

function Card(props: CardData) {
  const {
    title, gtin, gender, price, sale_price, image_link, additional_image_link,
  } = props;

  return (<p>{title}</p>);
}

export default Card;
