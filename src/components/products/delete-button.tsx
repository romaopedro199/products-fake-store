"use client";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ButtonHover from "../common/button-hover";
import { useProductStore } from "@/stores/products-store";
import { useDeleteProduct } from "@/hooks/use-delete-product";

const DeleteButton = ({ productId }: { productId: number }) => {
  const { loading } = useProductStore();
  const { handleDelete, dialogOpen, setDialogOpen } =
    useDeleteProduct(productId);

  return (
    <>
      <ButtonHover
        transparent
        type="button"
        disabled={loading}
        onClick={() => setDialogOpen(true)}
      >
        Delete
      </ButtonHover>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle color="text.primary">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText color="text.primary">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonHover
            type="button"
            disabled={loading}
            onClick={() => setDialogOpen(false)}
          >
            Cancel
          </ButtonHover>
          <ButtonHover
            transparent
            type="button"
            disabled={loading}
            onClick={handleDelete}
          >
            Delete
          </ButtonHover>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
