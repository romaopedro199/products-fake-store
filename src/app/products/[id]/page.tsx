"use client";
import ProductFormPlaceholder from "@/components/products/product-form/placeholder";
import ProductForm from "@/components/products/product-form/product-form";
import { useProduct } from "@/hooks/use-product";
import { Container } from "@mui/material";
import { use } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { product } = useProduct(Number(id));

  return (
    <Container>
      {!product ? (
        <ProductFormPlaceholder />
      ) : (
        <ProductForm product={product} />
      )}
    </Container>
  );
}
