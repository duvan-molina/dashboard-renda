import axios from "axios";

export const testingService = async () => {
  return await axios.get("https://rickandmortyapi.com/api/character");
};
