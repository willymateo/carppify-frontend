import { VehicleTableRow } from "../components/VehicleTableRow";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";
import {
  Box,
  Table,
  Paper,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableHead,
  Typography,
  TableContainer,
} from "@mui/material";

export default function Home() {
  const { driver_id, vehicles } = useSelector(state => state.driver);

  return (
    <Stack direction="column" justifyContent="space-between" flex={1} margin={2}>
      <Header />
      <Box marginY={5}>
        {driver_id ? (
          <>
            <Container>
              <Typography variant="h4" textAlign="center">
                {`Vehicles of driver with ID: ${driver_id}`}
              </Typography>
            </Container>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
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
          </>
        ) : (
          <Typography variant="h4" textAlign="center">
            Welcome, please enter a driver ID
          </Typography>
        )}
      </Box>

      <Footer />
    </Stack>
  );
}
