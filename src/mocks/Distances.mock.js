const defaultValue = [
  {
    SRC_CITY_ID: 1,
    DST_CITY_ID: 2,
    DISTANCE: 15,
  },
  {
    SRC_CITY_ID: 1,
    DST_CITY_ID: 3,
    DISTANCE: 20,
  },
  {
    SRC_CITY_ID: 2,
    DST_CITY_ID: 1,
    DISTANCE: 15,
  },
];

let tableValue = null;

if (Boolean(window.localStorage.getItem("distances"))) {
  tableValue = JSON.parse(window.localStorage.getItem("distances"));
} else {
  window.localStorage.setItem("distances", JSON.stringify(defaultValue));
  tableValue = JSON.parse(window.localStorage.getItem("distances"));
}

export const distances = tableValue;
