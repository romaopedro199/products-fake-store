"use client";
import { Box, Skeleton } from "@mui/material";

const ProductFormPlaceholder = () => {
  return (
    <Box gap={2} display="flex" flexDirection="column" maxWidth={500}>
      <Skeleton variant="text" sx={{ fontSize: "32px" }} />
      <Skeleton variant="text" sx={{ fontSize: "32px" }} />
      <Skeleton variant="text" sx={{ fontSize: "32px" }} />
      <Skeleton variant="text" sx={{ fontSize: "32px" }} />
      <Skeleton variant="text" sx={{ fontSize: "32px" }} />

      <Box display="flex" gap={1}>
        <Skeleton width={100} variant="text" sx={{ fontSize: "32px" }} />
        <Skeleton width={100} variant="text" sx={{ fontSize: "32px" }} />
      </Box>
    </Box>
  );
};

export default ProductFormPlaceholder;
