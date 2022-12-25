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
import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  createApartamentService,
  editApartamentService,
  getApartamentByIdService,
} from "../../../services/services";
import { useAppDispatch } from "../../../store/hooks";
import { getAllApartaments } from "../../../store/modules/dashboard/actions/thunks";
import { useEffect, useState } from "react";
import { CreateApartamentType } from "../../../services/utils";

const CreateApartamentContainer: React.FC = () => {
  let { apartamentId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      address: "",
      price: 0,
      numberOfRooms: 1,
      numberOfBathRooms: 1,
      socialStratum: 1,
      includedServices: false,
      commercialUse: false,
      withGarage: false,
      isReting: false,
      furnished: false,
      pets: true,
      motorcycleStorageSpace: false,
      isActive: true,
    },
  });

  const onSubmit = async (data: CreateApartamentType) => {
    const parserData = {
      ...data,
      price: Number(data.price),
      isReting: !data.isReting,
    };
    if (apartamentId) {
      await editApartamentService(apartamentId, data);
      await dispatch(getAllApartaments());
      navigate("/");
      return;
    }
    const { success } = await createApartamentService(parserData);
    if (success) {
      await dispatch(getAllApartaments());
      navigate("/");
    }
  };

  // TODO: get apartment by id whitout services
  const getApartamentById = async () => {
    if (apartamentId) {
      setIsLoading(true);
      const { success, response } = await getApartamentByIdService(
        apartamentId
      );

      if (success && !!response) {
        for (const [key, value] of Object.entries(response)) {
          // @ts-ignore
          setValue(key, value);
        }
      }
      setIsLoading(false);
    } else {
      reset();
    }
  };

  useEffect(() => {
    getApartamentById();
  }, [apartamentId]);

  if (isLoading) return <>Loading....</>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={1}>
          <Grid item sm={12}>
            <Typography textAlign="center" component="h1">
              Agrega información de la propiedad
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="Titulo"
                  error={false}
                  required
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={6}>
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField fullWidth label="Dirección" {...field} />
              )}
            />
          </Grid>
          <Grid item sm={12}>
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label="description"
                  multiline
                  rows={10}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={12}>
            <Controller
              name="price"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControl fullWidth style={{ margin: 0 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    precio
                  </InputLabel>
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    inputProps={{
                      name: "price",
                    }}
                    label="precio"
                    {...field}
                  />
                </FormControl>
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Controller
              name="numberOfRooms"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="number"
                  label="Número de habitaciones"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Controller
              name="numberOfBathRooms"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="number"
                  label="Número de baños"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={4}>
            <Controller
              name="socialStratum"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="number"
                  label="Estracto social"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item sm={12}>
            <Typography textAlign="center" component="h3">
              Caracteristicas
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <Controller
                  name="includedServices"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("includedServices")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("includedServices", e.target.checked)
                          }
                        />
                      }
                      label="¿Cuenta con servicios incluidos?"
                    />
                  )}
                />

                <Controller
                  name="commercialUse"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("commercialUse")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("commercialUse", e.target.checked)
                          }
                        />
                      }
                      label="¿Es de uso comercial?"
                    />
                  )}
                />

                <Controller
                  name="withGarage"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("withGarage")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("withGarage", e.target.checked)
                          }
                        />
                      }
                      label="¿Cuenta con garaje?"
                    />
                  )}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item sm={4}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <Controller
                  name="isReting"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("isReting")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("isReting", e.target.checked)
                          }
                        />
                      }
                      label="¿Vendes esta propiedad?"
                    />
                  )}
                />

                <Controller
                  name="furnished"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("furnished")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("furnished", e.target.checked)
                          }
                        />
                      }
                      label="¿Es amueblado?"
                    />
                  )}
                />

                <Controller
                  name="pets"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("pets")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("pets", e.target.checked)
                          }
                        />
                      }
                      label="¿Se aceptan máscotas?"
                    />
                  )}
                />

                <Controller
                  name="motorcycleStorageSpace"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={getValues("motorcycleStorageSpace")}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setValue("motorcycleStorageSpace", e.target.checked)
                          }
                        />
                      }
                      label="¿Tiene espacio para guardar la moto?"
                    />
                  )}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <Box style={{ textAlign: "center" }}>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "loading..." : "Guardar"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default CreateApartamentContainer;
