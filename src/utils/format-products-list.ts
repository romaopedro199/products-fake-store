import { PRODUCTS_PER_PAGE } from "@/constants/products";

type formatProductsListProps = {
  category: Category;
  products: Product[];
  sort: Sort;
  page: Page;
};

export const formatProductsList = ({
  category,
  products,
  sort,
  page,
}: formatProductsListProps) => {
  let formattedList = products;

  if (category) {
    formattedList = formattedList.filter(
      (product) => product.category === category
    );
  }

  if (sort) {
    formattedList = formattedList.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
  }

  const paginatedList = formattedList.splice(
    page > 1 ? (page - 1) * PRODUCTS_PER_PAGE : page - 1,
    PRODUCTS_PER_PAGE
  );

  return paginatedList;
};
