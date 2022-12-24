import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComponent from "../components/Card.component";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { apartamentsSelector } from "../../shared/store/modules/dashboard/selectors";
import { getAllApartaments } from "../../shared/store/modules/dashboard/actions/thunks";

const DashboardContainer: React.FC = () => {
  const apartaments = useAppSelector(apartamentsSelector);
  const dispatch = useAppDispatch();

  const getAllApartamentsfn = async () => {
    if (apartaments.length === 0) {
      await dispatch(getAllApartaments()).unwrap();
    }
  };

  useEffect(() => {
    getAllApartamentsfn();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {apartaments.length > 0 && (
          <Grid item xs={12} sm={6} lg={4}>
            <CardComponent title="Hello world" description="hello" />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default DashboardContainer;
