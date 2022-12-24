import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/store/hooks";
import { sigin } from "../../shared/store/modules/auth/actions/thunks";
import { isLogginSelector } from "../../shared/store/modules/auth/selectors";

type FormValues = {
  email: string;
  password: string;
};

const LoginContainer: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggin = useAppSelector(isLogginSelector);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setIsError(false);
      const { success } = await dispatch(sigin(data)).unwrap();
      if (!success) {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoggin) return <Navigate to="/home" />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  error={false}
                  label="email"
                  type="email"
                  required
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              rules={{ required: true, min: 6 }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  error={false}
                  label="password"
                  type="password"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            {isError && <Typography>Opps algo salió mal</Typography>}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Ingresar"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default LoginContainer;
