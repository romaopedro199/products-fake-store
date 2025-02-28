import { screen } from "@testing-library/react";
import Tooltip from "@/components/common/tooltip";
import renderWithTheme from "@/tests/utils/render-with-theme";

describe("Tooltip", () => {
  it("should render the children passed into it", () => {
    renderWithTheme(
      <Tooltip open={false} content="Test Tooltip">
        <button>Click Me</button>
      </Tooltip>
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("should display the tooltip content when open is true", () => {
    renderWithTheme(
      <Tooltip open={true} content="Test Tooltip">
        <button>Click Me</button>
      </Tooltip>
    );

    expect(screen.getByText("Test Tooltip")).toBeInTheDocument();
  });

  it("should not display the tooltip content when open is false", () => {
    renderWithTheme(
      <Tooltip open={false} content="Test Tooltip">
        <button>Click Me</button>
      </Tooltip>
    );

    expect(screen.queryByText("Test Tooltip")).not.toBeInTheDocument();
  });

  it("should handle open/close when passed the open prop", () => {
    const { rerender } = renderWithTheme(
      <Tooltip open={false} content="Test Tooltip">
        <button>Click Me</button>
      </Tooltip>
    );

    expect(screen.queryByText("Test Tooltip")).not.toBeInTheDocument();

    rerender(
      <Tooltip open={true} content="Test Tooltip">
        <button>Click Me</button>
      </Tooltip>
    );

    expect(screen.getByText("Test Tooltip")).toBeInTheDocument();
  });
});
