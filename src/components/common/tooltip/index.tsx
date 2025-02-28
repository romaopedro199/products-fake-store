import { Box, Tooltip as MUITooltip } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { tooltipStyles } from "./styles";

type TooltipProps = {
  open: boolean;
  content: ReactNode;
  children: ReactElement;
};

export default function Tooltip({ content, open, children }: TooltipProps) {
  return (
    <Box>
      <MUITooltip
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={content}
        slotProps={{
          popper: {
            disablePortal: true,
          },
        }}
        PopperProps={{ style: { zIndex: 1 } }}
        componentsProps={{
          tooltip: {
            sx: tooltipStyles,
          },
        }}
      >
        <Box>{children}</Box>
      </MUITooltip>
    </Box>
  );
}
