export const isFeaturedProduct = (product: Product) => {
  return product.rating.rate > 4.5;
};
