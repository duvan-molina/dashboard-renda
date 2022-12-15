import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const CreateApartamentComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate("/");

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} marginTop={1}>
        <Grid item sm={12}>
          <Typography textAlign="center" component="h1">
            Agrega información de la propiedad
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <TextField fullWidth label="Titulo" />
        </Grid>
        <Grid item sm={6}>
          <TextField fullWidth label="Dirección" />
        </Grid>
        <Grid item sm={12}>
          <TextField fullWidth label="Descripción" multiline rows={10} />
        </Grid>
        <Grid item sm={12}>
          <FormControl fullWidth style={{ margin: 0 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <TextField fullWidth type="number" label="Número de habitaciones" />
        </Grid>
        <Grid item sm={4}>
          <TextField fullWidth type="number" label="Número de baños" />
        </Grid>
        <Grid item sm={4}>
          <TextField fullWidth type="number" label="Estracto social" />
        </Grid>
        <Grid item sm={12}>
          <Typography textAlign="center" component="h3">
            Caracteristicas
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="¿Cuenta con servicios incluidos?"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="¿Es de uso comercial?"
              />
              <FormControlLabel
                control={<Checkbox name="antoine" />}
                label="¿Cuenta con garaje?"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="¿Vendes esta propiedad?"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="¿Es amueblado?"
              />
              <FormControlLabel
                control={<Checkbox name="antoine" />}
                label="¿Se aceptan máscotas?"
              />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="¿Tiene espacio para guardar la moto?"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Box style={{ textAlign: "center" }}>
            <Button variant="contained" onClick={handleNavigation}>
              Guardar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateApartamentComponent;
