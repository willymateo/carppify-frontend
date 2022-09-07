import DialogContentText from "@mui/material/DialogContentText";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import InputAdornment from "@mui/material/InputAdornment";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import SearchIcon from "@mui/icons-material/Search";
import { setDriver } from "../redux/states/driver";
import { getAllVehicles } from "../services/driver";
import TextField from "@mui/material/TextField";
import { DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import { useState } from "react";

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
    const vehicles = await getAllVehicles(driverId);
    if (vehicles.error) {
      setDialogStatus({ open: true, error: vehicles.error });
      return;
    }
    dispatch(setDriver({ driver_id: driverId, vehicles }));
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
