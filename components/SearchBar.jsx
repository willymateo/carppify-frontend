import { getAllVehicles, getDriverById } from "../services/driver";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SearchIcon from "@mui/icons-material/Search";
import { setDriver } from "../redux/states/driver";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  Stack,
  Button,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  DialogContentText,
} from "@mui/material";

function SearchBar() {
  const dispatch = useDispatch();
  const [driverId, setDriverId] = useState("");
  const onChangeTextField = ({ target: { value } }) => setDriverId(value);
  const [dialogStatus, setDialogStatus] = useState({ open: false, error: "" });
  const hideErrorDialog = () => setDialogStatus({ ...dialogStatus, open: false });

  const onClickSearch = async () => {
    if (!driverId) {
      setDialogStatus({ open: true, error: "Please enter a driver id" });
      return;
    }
    const driver = await getDriverById(driverId);
    if (driver.error) {
      setDialogStatus({ open: true, error: driver.error });
      return;
    }

    const res = await getAllVehicles({ driver_id: driverId, offset: 0, limit: 5 });
    if (res.error) {
      setDialogStatus({ open: true, error: res.error });
      return;
    }
    const { rows: vehicles, count: num_vehicles } = res;
    dispatch(setDriver({ ...driver, vehicles, num_vehicles }));
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <TextField
          name="driver_id"
          label="Driver ID"
          onChange={onChangeTextField}
          value={driverId}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RememberMeIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button endIcon={<SearchIcon />} onClick={onClickSearch}>
          Search
        </Button>
      </Stack>
      <Dialog open={dialogStatus.open} onClose={hideErrorDialog} fullWidth>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogStatus.error}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideErrorDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { SearchBar };
