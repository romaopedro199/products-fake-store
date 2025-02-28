import { ReactNode, useMemo } from "react";
import Button from "@mui/material/Button";
import { buttonHoverStyles } from "./styles";

type ButtonHoverProps = {
  children: ReactNode;
  disabled?: boolean;
  transparent?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function ButtonHover({
  children,
  disabled,
  transparent,
  type = "button",
  onClick,
}: ButtonHoverProps) {
  const sx = useMemo(
    () => ({
      ...buttonHoverStyles,
      bgcolor: transparent ? "transparent !important" : "secondary.main",
      color: transparent ? "text.primary" : "text.secondary",
    }),
    [transparent]
  );

  return (
    <Button
      variant="contained"
      size="small"
      type={type}
      disabled={disabled}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </Button>
  );
}
