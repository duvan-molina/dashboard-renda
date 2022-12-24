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
