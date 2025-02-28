"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  Skeleton,
} from "@mui/material";
import { tableContainerStyles } from "./styles";
import StyledTableRow from "./products-list-styled-table-row";

const ProductsListPlaceholder = () => {
  return (
    <>
      <TableContainer component={Paper} sx={tableContainerStyles}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <TableCell>
                <Skeleton variant="text" sx={{ fontSize: "16px" }} />
              </TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <StyledTableRow key={item}>
                <TableCell>
                  <Skeleton variant="text" sx={{ fontSize: "16px" }} />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsListPlaceholder;
