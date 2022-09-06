import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function VehicleTableRow({ id, driver_id, plate, model, type, capacity, creation_date }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{driver_id}</TableCell>
      <TableCell align="right">{plate}</TableCell>
      <TableCell align="right">{model}</TableCell>
      <TableCell align="right">{type}</TableCell>
      <TableCell align="right">{capacity}</TableCell>
      <TableCell align="right">{creation_date}</TableCell>
    </TableRow>
  );
}

export { VehicleTableRow };
