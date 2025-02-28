type getTotalProductsByCategoryProps = {
  category: Category;
  products: Product[];
};

export const getTotalProductsByCategory = ({
  category,
  products,
}: getTotalProductsByCategoryProps) => {
  let formattedList = products;

  if (category) {
    formattedList = formattedList.filter(
      (product) => product.category === category
    );
  }

  return formattedList.length;
};
