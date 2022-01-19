function getRandomImagePlaceholder() {
  const productBasePath = (num: number) => `https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-${num}_large.png`;
  const getRandomNumberFrom1to6 = () => Math.floor(Math.random() * 6) + 1;

  return productBasePath(getRandomNumberFrom1to6());
}

export default getRandomImagePlaceholder;
