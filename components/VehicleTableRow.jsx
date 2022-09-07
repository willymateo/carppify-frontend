import { resetVehicle, setVehicle } from "../redux/states/vehicle";
import { deleteVehicle, editVehicle } from "../services/vehicles";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { getAllVehicles } from "../services/driver";
import { setDriver } from "../redux/states/driver";
import { pink, cyan } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import { VehicleForm } from "./VehicleForm";
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
  const { driver_id: driverIdRedux } = useSelector(state => state.driver);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const vehicleData = useSelector(state => state.vehicle);
  const dispatch = useDispatch();

  const [snackBarStatus, setSnakBarStatus] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const hideDialog = () => {
    dispatch(resetVehicle());
    setIsDialogOpen(false);
  };

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
    setSnakBarStatus({
      open: true,
      message: res.message,
      severity: "success",
    });
    hideDialog();
    await reloadTable();
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
    await reloadTable();
  };

  const reloadTable = async () => {
    const vehicles = await getAllVehicles(driverIdRedux);
    if (vehicles.error) {
      setSnakBarStatus({
        open: true,
        message: vehicles.error,
        severity: "error",
      });
      return;
    }
    dispatch(setDriver({ vehicles }));
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

      <Dialog open={isDialogOpen} onClose={hideDialog} fullWidth>
        <DialogTitle>Edit Vehicle with ID:{id}</DialogTitle>
        <DialogContent>
          <VehicleForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideDialog}>Discard</Button>
          <Button variant="contained" onClick={onAcceptEdit}>
            Edit vehicle
          </Button>
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
