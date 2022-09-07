import { Typography, IconButton, Stack } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

function Footer() {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" marginY={5}>
      <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
        <Typography variant="h6" gutterBottom fontFamily="lobster">
          Carpiffy
        </Typography>
        <CopyrightIcon />
        <Typography>2022</Typography>
      </Stack>

      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography gutterBottom>Willy Mateo Espinoza</Typography>
        <Stack spacing={1} direction="row" justifyContent="center" alignItems="center">
          <Link href="https://github.com/willymateo" passHref>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>
          <Link href="https://twitter.com/willymateoe" passHref>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/willy-mateo-espinoza-38768b1ab" passHref>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { Footer };
