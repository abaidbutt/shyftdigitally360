import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IconButton, Box } from "@mui/material";
import { Info } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({ handleToggle, open }) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleToggle}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Info />
          </IconButton>
          <DialogTitle sx={{ mx: 2 }}>
            Are you sure you want to close?
          </DialogTitle>
        </Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            All changes will be lost
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggle} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleToggle} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
