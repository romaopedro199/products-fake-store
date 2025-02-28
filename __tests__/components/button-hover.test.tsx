import { screen, fireEvent } from "@testing-library/react";
import ButtonHover from "@/components/common/button-hover";
import renderWithTheme from "@/tests/utils/render-with-theme";

describe("ButtonHover Component", () => {
  it("should render correctly with children", () => {
    renderWithTheme(<ButtonHover>Test</ButtonHover>);
    expect(screen.getByRole("button", { name: /test/i })).toBeInTheDocument();
  });

  it("should disable the button when the `disabled` prop is true", () => {
    renderWithTheme(<ButtonHover disabled>Disabled</ButtonHover>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it("should trigger the `onClick` function when the button is clicked", () => {
    const handleClick = jest.fn();
    renderWithTheme(<ButtonHover onClick={handleClick}>Click</ButtonHover>);
    const button = screen.getByRole("button", { name: /click/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should set the `type` attribute of the button correctly", () => {
    renderWithTheme(<ButtonHover type="submit">Submit</ButtonHover>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should apply correct styles when `transparent` is true", () => {
    renderWithTheme(<ButtonHover transparent>Transparent</ButtonHover>);
    const button = screen.getByRole("button", { name: /transparent/i });

    expect(button).toHaveStyle("background-color: transparent");
  });

  it("should apply correct styles when `transparent` is false", () => {
    renderWithTheme(<ButtonHover>Normal</ButtonHover>);
    const button = screen.getByRole("button", { name: /normal/i });

    expect(button).not.toHaveStyle("background-color: transparent !important");
  });
});
