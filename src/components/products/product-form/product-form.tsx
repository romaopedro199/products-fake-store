"use client";
import { TextField, Box, MenuItem, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import ButtonHover from "@/components/common/button-hover";
import DeleteButton from "@/components/products/delete-button";
import { useProductForm } from "@/hooks/use-product-form";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const ProductForm = ({ product }: { product?: Product }) => {
  const { onSubmit, errors, handleSubmit, control, loading } =
    useProductForm(product);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      gap={2}
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h5">
        {product ? "Update Product" : "Add Poduct"}
      </Typography>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <Controller
        name="category"
        disabled={!!product?.id}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Category"
            error={!!errors.category}
            helperText={errors.category?.message}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="number"
            label="Price"
            error={!!errors.price}
            helperText={errors.price?.message}
            onChange={(e) => field.onChange(Number(e.target.value))}
          />
        )}
      />
      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Image URL"
            error={!!errors.image}
            helperText={errors.image?.message}
          />
        )}
      />

      <Box display="flex" gap={1}>
        <ButtonHover type="submit" disabled={loading}>
          {product ? "Update Product" : "Add Poduct"}
        </ButtonHover>
        {product?.id && <DeleteButton productId={product.id} />}
      </Box>
    </Box>
  );
};

export default ProductForm;
