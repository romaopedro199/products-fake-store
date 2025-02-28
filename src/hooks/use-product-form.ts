import { useProductStore } from "@/stores/products-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { productSchema } from "@/schemas/product-schema";
import { useuseSnackbarStore } from "@/stores/snackbar-store";

type ProductFormInputs = z.infer<typeof productSchema>;

export const useProductForm = (product?: Product) => {
  const { addProduct, updateProduct, loading } = useProductStore();
  const { snackbar } = useuseSnackbarStore();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(productSchema),
    defaultValues: product ?? { title: "", category: "", price: 0, image: "" },
  });

  const onSubmit = async (data: ProductFormInputs) => {
    try {
      if (product) {
        await updateProduct(product.id, data);
      } else {
        await addProduct(data);
        reset();
      }
      snackbar(
        `Product ${product ? "updated" : "created"} with success!`,
        "success"
      );
    } catch (error) {
      snackbar(`Something went wrong: ${error}`, "error");
    }
  };

  return {
    product,
    onSubmit,
    errors,
    handleSubmit,
    control,
    addProduct,
    updateProduct,
    loading,
  };
};
