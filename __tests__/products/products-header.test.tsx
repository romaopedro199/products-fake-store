import { render, screen, fireEvent } from "@testing-library/react";
import ProductsHeader from "@/components/products/products-header";
import { useProductStore } from "@/stores/products-store";
import { useRouter } from "next/navigation";

jest.mock("@/stores/products-store");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProductsHeader Component", () => {
  const mockSetCategory = jest.fn();
  const mockSetSort = jest.fn();
  const mockSetFeaturedFirst = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useProductStore as jest.Mock).mockReturnValue({
      loading: false,
      categories: ["electronics", "jewelery"],
      category: "",
      sort: "",
      featuredFirst: false,
      setCategory: mockSetCategory,
      setSort: mockSetSort,
      setFeaturedFirst: mockSetFeaturedFirst,
    });

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("must render correctly", () => {
    render(<ProductsHeader />);
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add product/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /filters/i })
    ).toBeInTheDocument();
  });

  it("You must open the filters when the button is clicked", () => {
    render(<ProductsHeader />);
    const filtersButton = screen.getByRole("button", { name: /filters/i });
    fireEvent.click(filtersButton);
    expect(screen.getByText(/featured first/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/order by/i)).toBeInTheDocument();
  });

  it("should switch featuredfrimst when switch is clicked", () => {
    render(<ProductsHeader />);
    fireEvent.click(screen.getByRole("button", { name: /filters/i }));
    const switchButton = screen.getByRole("checkbox");
    fireEvent.click(switchButton);
    expect(mockSetFeaturedFirst).toHaveBeenCalledWith(true);
  });

  it("must redirect to the Add product page", () => {
    render(<ProductsHeader />);
    const addButton = screen.getByRole("button", { name: /add product/i });
    fireEvent.click(addButton);
    expect(mockPush).toHaveBeenCalledWith("/products/add");
  });

  it("should disable the buttons when the loading state is true", () => {
    (useProductStore as jest.Mock).mockReturnValue({
      loading: true,
      categories: [],
      category: "",
      sort: "",
      featuredFirst: false,
      setCategory: mockSetCategory,
      setSort: mockSetSort,
      setFeaturedFirst: mockSetFeaturedFirst,
    });

    render(<ProductsHeader />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});
