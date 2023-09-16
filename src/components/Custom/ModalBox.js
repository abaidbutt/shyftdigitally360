import * as React from "react";
import { Divider, IconButton } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function ModalBox({ open, handleClose, label, ...props }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
        <Stack direction="row" justifyContent="space-between">
          <DialogTitle>{label}</DialogTitle>
          <IconButton
            onClick={handleClose}
            color="primary"
            size="small"
            disableRipple
            sx={{ mr: 2 }}
          >
            <Close />
          </IconButton>
        </Stack>
        <Divider />
        <DialogContent>{props.children}</DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}
