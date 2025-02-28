"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Pagination,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { PRODUCTS_PER_PAGE } from "@/constants/products";
import { formatProductName } from "@/utils/format-product-name";
import Chip from "../../common/chip";
import { isFeaturedProduct } from "@/utils/is-featured-product";
import { useProductsList } from "@/hooks/use-products-list";
import {
  paginationStyles,
  productCategoryStyles,
  starStyles,
  tableContainerStyles,
} from "./styles";
import ProductsListPlaceholder from "./placeholder";
import StyledTableRow from "./products-list-styled-table-row";
import ButtonHover from "@/components/common/button-hover";
import DeleteButton from "@/components/products/delete-button";

type HeadTableRowProps = {
  data: string[];
};

const HeadTableRow = ({ data }: HeadTableRowProps) => (
  <StyledTableRow>
    {data.map((item) => (
      <TableCell key={item}>
        <strong>{item}</strong>
      </TableCell>
    ))}
  </StyledTableRow>
);

type DataTableRowProps = {
  product: Product;
  handleGoToProduct: (param: number) => void;
};

const DataTableRow = ({ product, handleGoToProduct }: DataTableRowProps) => (
  <StyledTableRow featured={isFeaturedProduct(product)}>
    <TableCell>#{product.id}</TableCell>
    <TableCell title={product.title}>
      <Box display="flex" alignItems="center">
        {formatProductName(product.title)}
        {isFeaturedProduct(product) && (
          <Box ml={1}>
            <Chip label="Featured" />
          </Box>
        )}
      </Box>
    </TableCell>
    <TableCell sx={productCategoryStyles}>{product.category}</TableCell>
    <TableCell>${product.price.toFixed(2)}</TableCell>
    <TableCell>
      <Box display="flex" alignItems="center">
        <StarIcon sx={starStyles} /> {product.rating.rate}
      </Box>
    </TableCell>
    <TableCell>
      <Box display="flex" gap={1}>
        <ButtonHover onClick={() => handleGoToProduct(product.id)}>
          Edit
        </ButtonHover>
        {product?.id && <DeleteButton productId={product.id} />}
      </Box>
    </TableCell>
  </StyledTableRow>
);

const ProductsList = () => {
  const {
    loading,
    handlePageChange,
    normalProducts,
    featuredProducts,
    page,
    totalProducts,
    tableTitles,
    handleGoToProduct,
  } = useProductsList();

  if (loading) return <ProductsListPlaceholder />;

  if (!featuredProducts.length && !normalProducts.length) return null;

  return (
    <>
      <TableContainer component={Paper} sx={tableContainerStyles}>
        <Table>
          <TableHead>
            <HeadTableRow data={tableTitles} />
          </TableHead>
          <TableBody>
            {[...featuredProducts, ...normalProducts].map((product) => (
              <DataTableRow
                key={product.id}
                product={product}
                handleGoToProduct={handleGoToProduct}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        variant="outlined"
        shape="rounded"
        count={Math.ceil(totalProducts / PRODUCTS_PER_PAGE)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={paginationStyles}
      />
    </>
  );
};

export default ProductsList;
