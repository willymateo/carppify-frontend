import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import DialogContentText from "@mui/material/DialogContentText";
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

  const [errorMessage, setErrorMessage] = useState("");
  const hideErrorDialog = () => setIsVisibleError(false);
  const [isVisibleError, setIsVisibleError] = useState(false);

  const onChangeTextField = ({ target: { value } }) => setDriverId(value);

  const onClickSearch = async () => {
    const vehicles = await getAllVehicles(driverId);
    if (vehicles.error) {
      setIsVisibleError(true);
      setErrorMessage(vehicles.error);
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
                <AirlineSeatReclineExtraIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button endIcon={<SearchIcon />} onClick={onClickSearch}>
          Search
        </Button>
      </Stack>
      <Dialog open={isVisibleError} onClose={hideErrorDialog} fullWidth>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideErrorDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export { SearchBar };
