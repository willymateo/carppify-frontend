import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function VehicleTableRow({ name, calories, fat, carbs, protein }) {
  return(
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{calories}</TableCell>
              <TableCell align="right">{fat}</TableCell>
              <TableCell align="right">{carbs}</TableCell>
              <TableCell align="right">{protein}</TableCell>
            </TableRow>
  )
}

export { VehicleTableRow }
