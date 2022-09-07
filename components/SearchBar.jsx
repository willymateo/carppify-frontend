import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { setDriver } from "../redux/states/driver";
import { getAllVehicles } from "../services/driver";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

function SearchBar() {
  const dispatch = useDispatch();
  const [driverId, setDriverId] = useState("");
  const onChangeTextField = ({ target: { value } }) => setDriverId(value);
  const onClickSearch = async () => {
    const vehicles = await getAllVehicles(driverId);
    if (vehicles.error) {
      console.log("Error ocurred");
      console.log(vehicles.error);
      return;
    }
    dispatch(setDriver({ driver_id: driverId, vehicles }));
  };

  return (
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
  );
}

export { SearchBar };
