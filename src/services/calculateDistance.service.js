export const calculate = {
  computedDistanceForDelivery(
    cities_with_stock = null,
    cities_distances = null,
    current_city_user_id = null
  ) {
    if (!cities_with_stock || !cities_distances || !current_city_user_id) {
      throw new Error(`Недостаточно параметров`);
    }

    const cityHasStockById = cities_with_stock.find(
      (city) => city.CITY_ID == current_city_user_id
    );

    if (cityHasStockById && cityHasStockById.CITY_ID == current_city_user_id) {
      return `В выбранном вами городе №${current_city_user_id} есть склад, расстояние: 0`;
    }

    if (!cityHasStockById) {
      const distances = [...cities_distances];

      distances.sort((a, b) => (a.DISTANCE - b.DISTANCE > 0 ? 1 : -1));

      while (distances) {
        let item = distances.shift();

        if (!cities_with_stock[item.SRC_CITY_ID]) {
          continue;
        }

        if (item.DST_CITY_ID == current_city_user_id) {
          return `Ближайший город №${item.SRC_CITY_ID}, который сможет доставить заказ в самый короткий срок на расстоянии: ${item.DISTANCE}`;
        }
      }
    }
  },
};
