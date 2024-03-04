const defaultValue = [
  {
    CITY_ID: 1,
    IS_STOCK: 1,
  },
  {
    CITY_ID: 2,
    IS_STOCK: 0,
  },
  {
    CITY_ID: 3,
    IS_STOCK: 1,
  },
];

let tableValue = null;

if (Boolean(window.localStorage.getItem("cities"))) {
  tableValue = JSON.parse(window.localStorage.getItem("cities"));
} else {
  window.localStorage.setItem("cities", JSON.stringify(defaultValue));
  tableValue = JSON.parse(window.localStorage.getItem("cities"));
}

export const cities = tableValue;
