import { deleteVehicle, editVehicle } from "../services/vehicles";
import DeleteIcon from "@mui/icons-material/Delete";
import { pink, cyan } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function VehicleTableRow({ id, driver_id, plate, model, type, capacity, creation_date }) {
  const [snackBarStatus, setSnakBarStatus] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const onClickEdit = async () => {
    const res = await editVehicle({ id });
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

  const hideSnackBar = () => {
    setSnakBarStatus({ ...snackBarStatus, open: false });
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
      <Snackbar onClose={hideSnackBar} autoHideDuration={10000} open={snackBarStatus.open}>
        <Alert onClose={hideSnackBar} severity={snackBarStatus.severity}>
          {snackBarStatus.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export { VehicleTableRow };
