import { cities } from "../../mocks/Cities.mock";

const getCities = {
  getAllCities() {
    return cities;
  },
  getOnlyHasStockCities() {
    return cities.filter((city) => city.IS_STOCK);
  },
};

export default getCities;
