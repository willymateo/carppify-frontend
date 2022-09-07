import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TodayIcon from "@mui/icons-material/Today";
import { useSelector } from "react-redux";

function CompanyInfoCard() {
  const { company } = useSelector(state => state.driver);
  const statusChip = {
    inactive: <Chip label="Inactive" />,
    active: <Chip label="Active" color="success" />,
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5" component="div">
            {company.name}
          </Typography>
          <Chip
            size="small"
            variant="outlined"
            label={`ID:${company.id}`}
            icon={<ApartmentIcon />}
          />
          {statusChip[company.status]}
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <TypeSpecimenIcon />
          <Typography variant="body2" color="text.secondary">
            Plan Type: {company.plan_type}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <TodayIcon />
          <Typography variant="body2" color="text.secondary">
            Created At: {company.creation_date}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export { CompanyInfoCard };
