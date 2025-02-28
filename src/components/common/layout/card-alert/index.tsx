import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ButtonHover from "@/components/common/button-hover";
import { carAlertDescriptionStyles, carAlertTitleStyles } from "./styles";

export default function CardAlert() {
  return (
    <Card variant="outlined" sx={{ m: 1.5, flexShrink: 0 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={carAlertTitleStyles}>
          Check your last report
        </Typography>
        <Typography variant="body2" sx={carAlertDescriptionStyles}>
          Your montly report is ready.
        </Typography>
        <ButtonHover>View Report</ButtonHover>
      </CardContent>
    </Card>
  );
}
