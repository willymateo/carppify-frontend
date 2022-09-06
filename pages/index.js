import { VehicleTableRow } from "../components/VehicleTableRow";
import TableContainer from "@mui/material/TableContainer";
import { SearchBar } from "../components/SearchBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Home({ data }) {
  return (
    <>
      <Header />

      <Box>
        <Container>
          <Typography variant="h4" textAlign="center">
            Vehicles by Driver ID
          </Typography>
        </Container>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
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
              {data.map(vehicle => (
                <VehicleTableRow key={vehicle.id} {...vehicle} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3001/api/driver/10/vehicles`);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { props: { data: [] } };
  }
}
