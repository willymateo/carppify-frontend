import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function SearchBar() {
  return (
    <Stack spacing={2} direction="row">
      <TextField
        id="driver_id"
        label="Driver ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AirlineSeatReclineExtraIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button endIcon={<SearchIcon />}>Search</Button>
    </Stack>
  );
}

export { SearchBar };
