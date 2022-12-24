import { createReducer } from "@reduxjs/toolkit";
import { thunks } from "../actions";

export type ApartamentGallery = {
  id: string;
  url: string;
  creation_date: Date;
};

export type ApartamentType = {
  id: string;
  title: string;
  description: string;
  address: string;
  isActive: boolean;
  price: number;
  numberOfRooms: number;
  numberOfBathRooms: number;
  socialStratum: number;
  pets: boolean;
  isReting: boolean;
  furnished: boolean;
  includedServices: boolean;
  commercialUse: boolean;
  withGarage: boolean;
  motorcycleStorageSpace: boolean;
  creation_date: Date;
  apartamentGallery?: ApartamentGallery[];
};

const dashboardReducer = createReducer({} as ApartamentType[], (builder) => {
  builder.addCase(thunks.getAllApartaments.fulfilled, (state, action) => {
    if (
      Array.isArray(action.payload.response) &&
      action.payload.response.length > 0
    ) {
      return action.payload.response;
    }
  });
});

export default dashboardReducer;

export type ReducerState = ReturnType<typeof dashboardReducer>;
