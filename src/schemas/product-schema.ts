import * as z from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Name is required").max(30, "Maximum 30 characters"),
  category: z.string().min(1, "Category is required"),
  price: z.number().min(1, "Price is required"),
  image: z.string().min(1, "Image URL is required"),
});
