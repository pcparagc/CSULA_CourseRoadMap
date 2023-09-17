import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const shapeStyles = { bgcolor: "primary.main", width: 15, height: 15 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box component="div" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);
const DialogBox = (props) => {
  const { handleClose, open, content } = props;

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle
        sx={{ m: 0, p: 2 }}
        id="customized-dialog-title"
        style={{ display: "flex" }}
      >
        {content.course_code}
        <Typography style={{ alignSelf: "center" }}>
          {content.course_unit?.toFixed(1)} units
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography variant="h6">Analytic Geometry/Calculus II</Typography>
        <div style={{ display: "flex", paddingBottom: "10px" }}>
          <Box
            style={{ alignSelf: "center" }}
            component="div"
            sx={{ ...shapeStyles, ...shapeCircleStyles }}
          />
          <Typography style={{ paddingLeft: "10px", alignSelf: "center" }}>
            MAJOR
          </Typography>
        </div>

        <Typography style={{ paddingBottom: "20px" }}>
          Transcendental functions, polar functions, sequences, infinite series
          and methods of integration. Further exposure to techniques and
          applications of differential and integral calculus. C-ID: MATH 221
        </Typography>

        <Typography
          variant="body2"
          style={{ borderBottom: "1px solid #000", fontWeight: "bold" }}
        >
          Prerequisites
        </Typography>
        <div style={{ display: "flex", padding: "5px 0px" }}>
          <Typography
            style={{
              flex: 0.6,
              fontWeight: "bold",
              color: "purple",
              cursor: "pointer",
            }}
            onClick={() => {
              alert("Comming Soon");
            }}
          >
            MATH B6A
          </Typography>
          <Typography style={{ flex: 1.4 }}>
            Analytic Geometry/Calculus I
          </Typography>
        </div>
      </DialogContent>

      <Typography variant="caption" display="block" style={{ padding: "16px" }}>
        Contact your academic advisor for any questions regarding prerequisites
      </Typography>
    </BootstrapDialog>
  );
};

export default DialogBox;
