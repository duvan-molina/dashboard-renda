import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComponent from "../components/Card.component";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { apartamentsSelector } from "../../../store/modules/dashboard/selectors";
import { getAllApartaments } from "../../../store/modules/dashboard/actions/thunks";

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
      <Grid container spacing={5}>
        {apartaments.length > 0 &&
          apartaments.map((apartament) => (
            <Grid item xs={12} sm={6} lg={3} key={apartament.id}>
              <CardComponent {...apartament} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default DashboardContainer;
