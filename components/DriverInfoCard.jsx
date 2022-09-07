import { Avatar, Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TodayIcon from "@mui/icons-material/Today";
import { useSelector } from "react-redux";
import { CompanyInfoCard } from "./CompanyInfoCard";

function DriverInfoCard() {
  const driver = useSelector(state => state.driver);
  const statusChip = {
    inactive: <Chip label="Inactive" />,
    active: <Chip label="Active" color="success" />,
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="flex-start" justifyContent="space-around">
          <Box>
            <Typography variant="h5" component="div">
              Driver Info
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>
                {driver.first_name ? driver.first_name[0] : ""}
                {driver.last_name ? driver.last_name[0] : ""}
              </Avatar>
              <Typography variant="h6" component="div">
                {driver.first_name} {driver.last_name}
              </Typography>
              <Chip
                size="small"
                variant="outlined"
                label={`ID:${driver.id}`}
                icon={<FingerprintIcon />}
              />
              {statusChip[driver.status]}
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <AlternateEmailIcon />
              <Typography variant="body2" color="text.secondary">
                Email: {driver.email}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIphoneIcon />
              <Typography variant="body2" color="text.secondary">
                Phone: {driver.phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <TodayIcon />
              <Typography variant="body2" color="text.secondary">
                Created At: {driver.creation_date}
              </Typography>
            </Stack>
          </Box>
          <CompanyInfoCard />
        </Stack>
      </CardContent>
    </Card>
  );
}

export { DriverInfoCard };
