import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";

const EditProfileComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} marginTop={1}>
        <Grid item sm={12}>
          <Typography textAlign="center" component="h1">
            Perfil
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6} marginBottom={1}>
              <TextField
                fullWidth
                label="Primer nombre"
                disabled
                defaultValue="John"
              />
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <TextField
                fullWidth
                label="Primer apellido"
                disabled
                defaultValue="Smith"
              />
            </Grid>
            <Grid item xs={12} marginBottom={1}>
              <TextField
                fullWidth
                label="Email"
                disabled
                defaultValue="email@email.com"
              />
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <TextField
                fullWidth
                label="Fecha de nacimiento"
                disabled
                defaultValue="21/03/2001"
              />
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <TextField
                fullWidth
                label="Número de telefono"
                disabled
                defaultValue="321-697-0000"
              />
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Cambiar contraseña
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} marginBottom={1}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirmar contraseñs
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProfileComponent;
