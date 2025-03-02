type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number };
};

type Loading = boolean;
type CustomError = string | null;
type Category = string;
type Sort = string;
type FeaturedFirst = boolean;
type Page = number;
type TotalProducts = number;

type ProductStore = {
  products: Product[];
  loading: Loading;
  customError: CustomError;
  category: Category;
  categories: Category[];
  featuredFirst: FeaturedFirst;
  sort: Sort;
  page: Page;
  totalProducts: TotalProducts;
  fetchProducts: () => Promise<void>;
  fetchProduct: (param: number) => Promise<Product | null | undefined>;
  setPage: (page: page) => void;
  setCategory: (category: Category) => void;
  setSort: (sort: Sort) => void;
  setFeaturedFirst: (featuredFirst: FeaturedFirst) => void;
  addProduct: (product: Omit<Product>) => Promise<void>;
  updateProduct: (id: number, data: Partial<Product>) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
};
