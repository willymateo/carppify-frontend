import { VehicleTableRow } from "../components/VehicleTableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 10,
    driver_id: 10,
    plate: "quia",
    model: "provident",
    type: "van",
    capacity: "large",
    creation_date: "2022-02-09T23:20:41.000Z",
  },
  {
    id: 10123,
    driver_id: 10,
    plate: "8cdld-879",
    model: "Ford F1509",
    type: "truck9",
    capacity: "medium",
    creation_date: "2022-09-06T04:40:41.000Z",
  },
];

export default function Home() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Driver ID</TableCell>
            <TableCell align="right">Plate</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Capacity</TableCell>
            <TableCell align="right">Creation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <VehicleTableRow key={row.id} {...row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
