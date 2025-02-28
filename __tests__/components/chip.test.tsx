import { screen } from "@testing-library/react";
import renderWithTheme from "@/tests/utils/render-with-theme";
import Chip from "@/components/common/chip";

describe("Chip Component", () => {
  it("must render correctly with a label", () => {
    renderWithTheme(<Chip label="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
