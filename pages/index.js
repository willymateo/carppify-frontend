import { ThemeProvider, createTheme } from "@mui/material/styles";
import { VehicleTableRow } from "../components/VehicleTableRow";
import { DriverInfoCard } from "../components/DriverInfoCard";
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
  CssBaseline,
  TableContainer,
} from "@mui/material";
import { TableControllers } from "../components/TableControllers";

export default function Home() {
  const { id: driver_id, vehicles } = useSelector(state => state.driver);
  const { theme } = useSelector(state => state.colorMode);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Stack direction="column" justifyContent="space-between" flex={1} margin={2}>
        <Header />
        <Box marginY={4}>
          {driver_id ? (
            <>
              <DriverInfoCard />
              <Container>
                <Typography variant="h4" textAlign="center" marginTop={4}>
                  Vehicles Info
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
              <TableControllers />
            </>
          ) : (
            <Typography variant="h4" textAlign="center">
              Welcome, please enter a driver ID
            </Typography>
          )}
        </Box>

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
