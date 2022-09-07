import { resetVehicle, setVehicle } from "../redux/states/vehicle";
import { deleteVehicle, editVehicle } from "../services/vehicles";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditVehicleForm } from "./EditVehicleForm";
import { pink, cyan } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  TableRow,
  Snackbar,
  TableCell,
  DialogTitle,
  IconButton,
  DialogActions,
  DialogContent,
} from "@mui/material";

function VehicleTableRow({ id, driver_id, plate, model, type, capacity, creation_date }) {
  const hideSnackBar = () => setSnakBarStatus({ ...snackBarStatus, open: false });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const vehicleData = useSelector(state => state.vehicle);
  const hideDialog = () => setIsDialogOpen(false);
  const dispatch = useDispatch();
  const [snackBarStatus, setSnakBarStatus] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onAcceptEdit = async () => {
    const res = await editVehicle(vehicleData);
    if (res.error) {
      setSnakBarStatus({
        open: true,
        message: res.error,
        severity: "error",
      });
      return;
    }
    dispatch(resetVehicle());
    setSnakBarStatus({
      open: true,
      message: res.message,
      severity: "success",
    });
    hideDialog();
  };

  const onDiscardEdit = async () => {
    dispatch(resetVehicle());
    hideDialog();
  };

  const onClickEdit = async () => {
    dispatch(setVehicle({ id, driver_id, plate, model, type, capacity }));
    setIsDialogOpen(true);
  };

  const onClickDelete = async () => {
    const res = await deleteVehicle(id);
    if (res.error) {
      setSnakBarStatus({
        open: true,
        message: res.error,
        severity: "error",
      });
      return;
    }
    setSnakBarStatus({
      open: true,
      message: res.message,
      severity: "warning",
    });
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="center">{id}</TableCell>
        <TableCell align="center">{driver_id}</TableCell>
        <TableCell align="center">{plate}</TableCell>
        <TableCell align="center">{model}</TableCell>
        <TableCell align="center">{type}</TableCell>
        <TableCell align="center">{capacity}</TableCell>
        <TableCell align="center">{creation_date}</TableCell>
        <TableCell align="center">
          <IconButton onClick={onClickEdit}>
            <EditIcon sx={{ color: cyan[500] }} />
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={onClickDelete}>
            <DeleteIcon sx={{ color: pink[500] }} />
          </IconButton>
        </TableCell>
      </TableRow>

      <Dialog open={isDialogOpen} onClose={onDiscardEdit} fullWidth>
        <DialogTitle>Edit Vehicle with ID:{id}</DialogTitle>
        <DialogContent>
          <EditVehicleForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={onAcceptEdit}>Accept</Button>
          <Button onClick={onDiscardEdit}>Discard</Button>
        </DialogActions>
      </Dialog>

      <Snackbar onClose={hideSnackBar} autoHideDuration={10000} open={snackBarStatus.open}>
        <Alert onClose={hideSnackBar} severity={snackBarStatus.severity}>
          {snackBarStatus.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export { VehicleTableRow };
