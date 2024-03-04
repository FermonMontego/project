"use strict";

import "../styles/main.css";

import getCities from "../../api/cities/get";
import getDistances from "../../api/distances/get";

import {calculate} from "../../services/CalculateDistance.service";

const form = document.querySelector("form[data-delivery-form]");
const selects = form.querySelectorAll("select");
const nearestCityResult = document.getElementById("nearest_city");

function createOptionsElement(parentNode) {
  if (parentNode.type === "city_to_delivery") {
    getCities.getAllCities().forEach((city) => {
      const optionElement = document.createElement("option");

      optionElement.setAttribute("value", city.CITY_ID);
      optionElement.setAttribute("data-is-stock", city.IS_STOCK);
      optionElement.textContent = `Город №${city.CITY_ID}`;

      parentNode.element.insertAdjacentElement("beforeend", optionElement);
    });
  }
}

selects.forEach((select) => {
  if (!select.getAttribute("name")) {
    throw new Error(`${select} don't have attribute: name`);
  }

  createOptionsElement({
    element: select,
    type: select.getAttribute("name"),
  });
});

function submitDeliveryForm(event) {
  event.preventDefault();

  const form_data = new FormData(form);

  nearestCityResult.querySelector("span").innerHTML = calculate.computedDistanceForDelivery(
      getCities.getOnlyHasStockCities(),
      getDistances.get(),
      form_data.get("city_to_delivery")
  );

}

form.addEventListener("submit", submitDeliveryForm);
