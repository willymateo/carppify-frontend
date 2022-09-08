import { useDispatch, useSelector } from "react-redux";
import { getAllVehicles } from "../services/driver";
import { Button, ButtonGroup } from "@mui/material";
import { setDriver } from "../redux/states/driver";
import { useState } from "react";

function TableControllers() {
  const { driver_id, num_vehicles } = useSelector(state => state.driver);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  const onClicPreview = async () => {
    setOffset(offset - 5);
    const res = await getAllVehicles({ driver_id, offset, limit: 5 });
    if (res.error) {
      console.log(res.error);
      return;
    }
    const { rows: vehicles, count: num_vehicles } = res;
    dispatch(setDriver({ vehicles, num_vehicles }));
  };

  const onClicNext = async () => {
    setOffset(offset + 5);
    const res = await getAllVehicles({ driver_id: 1, offset, limit: 5 });
    if (res.error) {
      console.log(res.error);
      return;
    }
    const { rows: vehicles, count: num_vehicles } = res;
    dispatch(setDriver({ vehicles, num_vehicles }));
  };
  return (
    <ButtonGroup>
      <Button onClick={onClicPreview}>Preview</Button>
      <Button onClick={onClicNext}>Next</Button>
    </ButtonGroup>
  );
}

export { TableControllers };
