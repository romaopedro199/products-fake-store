import { Chip as MUIChip } from "@mui/material";
import { chipStyles } from "./styles";

type ChipProps = {
  label: string;
};

export default function Chip({ label }: ChipProps) {
  return <MUIChip label={label} size="small" sx={chipStyles} />;
}
