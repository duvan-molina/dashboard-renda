import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComponent from "../components/Card.component";

const DashboardContainer: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} lg={4}>
          <CardComponent title="Hello world" description="hello" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CardComponent title="Hello world" description="hello" />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CardComponent title="Hello world" description="hello" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContainer;
