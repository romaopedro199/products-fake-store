import { TableRow } from "@mui/material";
import { ReactNode } from "react";

type StyledTableRowProps = {
  children: ReactNode;
  featured?: boolean;
};

const StyledTableRow = ({ children, featured }: StyledTableRowProps) => (
  <TableRow
    sx={{ bgcolor: featured ? "background.paper" : "background.default" }}
  >
    {children}
  </TableRow>
);

export default StyledTableRow;
