import { useProductStore } from "@/stores/products-store";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
  Switch,
  Typography,
} from "@mui/material";
import ButtonHover from "../../common/button-hover";
import Tooltip from "../../common/tooltip";
import { useState } from "react";
import {
  categoryStyles,
  containerStyles,
  featuredFirstStyles,
  orderByStyles,
} from "./styles";
import { useRouter } from "next/navigation";

type CustomInputLabelProps = {
  label: string;
};

const CustomInputLabel = ({ label }: CustomInputLabelProps) => (
  <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>
);

const ProductsHeader = () => {
  const router = useRouter();
  const {
    loading,
    categories,
    category,
    sort,
    setCategory,
    setSort,
    setFeaturedFirst,
    featuredFirst,
  } = useProductStore();
  const [openFilters, setOpenFilters] = useState(false);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setCategory(value);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSort(value);
  };

  const handleFeaturedFirstChange = () => {
    setFeaturedFirst(!featuredFirst);
  };

  const handleToggleFilters = () => setOpenFilters(!openFilters);

  const handleGoToProductForm = () => {
    router.push("/products/add");
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5">Products</Typography>
      <Box display="flex" gap={2}>
        <Tooltip
          open={openFilters && !loading}
          content={
            <Box>
              <FormControl size="small" sx={featuredFirstStyles}>
                <Typography color="text.primary">
                  Featured first
                  <Switch
                    checked={featuredFirst}
                    onChange={handleFeaturedFirstChange}
                  />
                </Typography>
              </FormControl>

              <FormControl size="small" sx={categoryStyles}>
                <CustomInputLabel label="Category" />
                <Select value={category} onChange={handleCategoryChange}>
                  <MenuItem value="">all</MenuItem>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={orderByStyles}>
                <CustomInputLabel label="Order by" />
                <Select value={sort} onChange={handleSortChange}>
                  <MenuItem value="">none</MenuItem>
                  <MenuItem value="asc">lowest price</MenuItem>
                  <MenuItem value="desc">higher price</MenuItem>
                </Select>
              </FormControl>
            </Box>
          }
        >
          <ButtonHover
            transparent
            disabled={loading}
            onClick={handleToggleFilters}
          >
            Filters
          </ButtonHover>
        </Tooltip>

        <ButtonHover disabled={loading} onClick={handleGoToProductForm}>
          Add Product
        </ButtonHover>
      </Box>
    </Box>
  );
};

export default ProductsHeader;
