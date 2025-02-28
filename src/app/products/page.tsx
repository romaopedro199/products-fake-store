"use client";
import ProductsHeader from "@/components/products/products-header";
import ProductsList from "@/components/products/products-list";
import { Container, Stack } from "@mui/material";

export default function ProductsPage() {
  return (
    <Container>
      <Stack spacing={2}>
        <ProductsHeader />
        <ProductsList />
      </Stack>
    </Container>
  );
}
