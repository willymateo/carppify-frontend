import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function VehicleTableRow({ id, driver_id, plate, model, type, capacity, creation_date }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="center">{driver_id}</TableCell>
      <TableCell align="center">{plate}</TableCell>
      <TableCell align="center">{model}</TableCell>
      <TableCell align="center">{type}</TableCell>
      <TableCell align="center">{capacity}</TableCell>
      <TableCell align="center">{creation_date}</TableCell>
      <TableCell align="center">
        <IconButton>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export { VehicleTableRow };
