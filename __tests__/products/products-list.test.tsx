import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ProductsList from "@/components/products/products-list";

const handleClick = jest.fn();

jest.mock("@/hooks/use-products-list", () => ({
  useProductsList: () => ({
    loading: false,
    featuredProducts: [
      {
        id: 3,
        title: "Featured Product",
        category: "Category 1",
        price: 40,
        rating: { rate: 5.0 },
      },
    ],
    normalProducts: [
      {
        id: 1,
        title: "Product 1",
        category: "Category 1",
        price: 20,
        rating: { rate: 4.5 },
      },
      {
        id: 2,
        title: "Product 2",
        category: "Category 2",
        price: 30,
        rating: { rate: 4.0 },
      },
    ],
    handlePageChange: handleClick,
    handleGoToProduct: handleClick,
    tableTitles: ["ID", "Name", "Category", "Price", "Rating", "Actions"],
    page: 1,
    totalProducts: 3,
  }),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProductsList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render products when loading is complete", async () => {
    render(<ProductsList />);

    await waitFor(() => screen.getByText("Product 1"));
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Featured Product")).toBeInTheDocument();
  });

  it("should call handleGoToProduct when edit button is clicked", async () => {
    render(<ProductsList />);

    const editButton = screen.getAllByText("Edit")[0];
    fireEvent.click(editButton);

    expect(handleClick).toHaveBeenCalledWith(3);
  });
});
