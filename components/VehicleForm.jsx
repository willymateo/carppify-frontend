import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import { useSelector, useDispatch } from "react-redux";
import NumbersIcon from "@mui/icons-material/Numbers";
import { setVehicle } from "../redux/states/vehicle";
import {
  Radio,
  Stack,
  TextField,
  FormLabel,
  RadioGroup,
  FormControl,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";

function VehicleForm() {
  const dispatch = useDispatch();
  const { driver_id, plate, model, type, capacity } = useSelector(state => state.vehicle);

  const handleOnChange = async ({ target: { name, value } }) =>
    dispatch(setVehicle({ [name]: value }));

  return (
    <Stack marginY={2} spacing={2}>
      <TextField
        name="driver_id"
        label="Driver ID"
        value={driver_id}
        onChange={handleOnChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RememberMeIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="plate"
        label="Plate"
        value={plate}
        onChange={handleOnChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NumbersIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="model"
        label="Model"
        value={model}
        onChange={handleOnChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalShippingIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl>
        <FormLabel>Type</FormLabel>
        <RadioGroup name="type" value={type} onChange={handleOnChange}>
          <FormControlLabel value="bicycle" control={<Radio />} label="Bicycle" />
          <FormControlLabel value="motorcycle" control={<Radio />} label="Motorcycle" />
          <FormControlLabel value="car" control={<Radio />} label="Car" />
          <FormControlLabel value="van" control={<Radio />} label="Van" />
          <FormControlLabel value="truck" control={<Radio />} label="Truck" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Capacity</FormLabel>
        <RadioGroup name="capacity" value={capacity} onChange={handleOnChange}>
          <FormControlLabel value="small" control={<Radio />} label="Small" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="large" control={<Radio />} label="Large" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

export { VehicleForm };
