import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { SearchBar } from "./SearchBar";
import "@fontsource/lobster/400.css";

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h2" gutterBottom fontFamily="lobster">
        Carppify
      </Typography>
      <SearchBar />
    </Stack>
  );
}

export { Header };
