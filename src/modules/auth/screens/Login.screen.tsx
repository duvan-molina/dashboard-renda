import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../shared/store/hooks";
import { sigin } from "../../shared/store/modules/auth/actions/thunks";

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    await dispatch(sigin(login));
  };

  return (
    <div>
      {" "}
      <Grid container>
        <Grid item sm={6}>
          <TextField
            fullWidth
            label="email"
            name="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            fullWidth
            label="password"
            name="password"
            onChange={handleChange}
          />
        </Grid>
        <Button onClick={handleClick}>Ingresar</Button>
      </Grid>
    </div>
  );
};

export default LoginScreen;
