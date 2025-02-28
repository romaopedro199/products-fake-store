import { useuseSnackbarStore } from "@/stores/snackbar-store";
import { useState } from "react";
import { useProductStore } from "@/stores/products-store";
import { useRouter } from "next/navigation";

export const useDeleteProduct = (id: number) => {
  const router = useRouter();
  const { snackbar } = useuseSnackbarStore();
  const { deleteProduct } = useProductStore();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await await deleteProduct(id);
      setDialogOpen(false);
      snackbar(`Product deleted with success!`, "success");
      router.push("/products");
    } catch (error) {
      snackbar(`Something went wrong: ${error}`, "error");
    }
  };

  return {
    handleDelete,
    dialogOpen,
    setDialogOpen,
  };
};
