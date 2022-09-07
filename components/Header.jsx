import { resetVehicle } from "../redux/states/vehicle";
import { useDispatch, useSelector } from "react-redux";
import { createVehicle } from "../services/vehicles";
import { SwitchColorMode } from "./SwitchColorMode";
import { getAllVehicles } from "../services/driver";
import { setDriver } from "../redux/states/driver";
import { VehicleForm } from "./VehicleForm";
import { SearchBar } from "./SearchBar";
import "@fontsource/lobster/400.css";
import { useState } from "react";
import {
  Alert,
  Stack,
  Button,
  Dialog,
  Snackbar,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function Header() {
  const dispatch = useDispatch();
  const showDialog = () => setIsDialogOpen(true);
  const vehicleData = useSelector(state => state.vehicle);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { id: driver_id } = useSelector(state => state.driver);
  const hideSnackBar = () => setSnakBarStatus({ ...snackBarStatus, open: false });

  const [snackBarStatus, setSnakBarStatus] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const hideDialog = () => {
    dispatch(resetVehicle());
    setIsDialogOpen(false);
  };

  const onAcceptCreate = async () => {
    const res = await createVehicle(vehicleData);
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

  const reloadTable = async () => {
    const vehicles = await getAllVehicles(driver_id);
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h2" gutterBottom fontFamily="lobster">
          Carppify
        </Typography>
        <SearchBar />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="contained" onClick={showDialog}>
            Add vehicle
          </Button>
          <SwitchColorMode />
        </Stack>
      </Stack>

      <Dialog open={isDialogOpen} onClose={hideDialog} fullWidth>
        <DialogTitle>Add a vehicle</DialogTitle>
        <DialogContent>
          <VehicleForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideDialog}>Discard</Button>
          <Button variant="contained" onClick={onAcceptCreate}>
            Add vehicle
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

export { Header };
