import { VehicleTableRow } from "../components/VehicleTableRow";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Home() {
  const { driver_id, vehicles } = useSelector(state => state.driver);

  return (
    <Stack direction="column" justifyContent="space-between" flex={1} margin={2}>
      <Header />

      <Box marginY={5}>
        <Container>
          <Typography variant="h4" textAlign="center">
            {driver_id ? `Vehicles of driver with ID: ${driver_id}` : "Vehicles by Driver ID"}
          </Typography>
        </Container>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Driver ID</TableCell>
                <TableCell align="center">Plate</TableCell>
                <TableCell align="center">Model</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Capacity</TableCell>
                <TableCell align="center">Creation Date</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map(vehicle => (
                <VehicleTableRow key={vehicle.id} {...vehicle} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Footer />
    </Stack>
  );
}
