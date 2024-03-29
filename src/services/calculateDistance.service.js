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
            (city) => city.CITY_ID === Number(current_city_user_id)
        );

        if (cityHasStockById && cityHasStockById.CITY_ID === Number(current_city_user_id) && cityHasStockById.IS_STOCK) {
            return `В выбранном вами городе №${current_city_user_id} есть склад, расстояние: 0`;
        }

        const cities_distances_sorted = cities_distances
            .filter(item => item.DST_CITY_ID === Number(current_city_user_id))
            .sort((a, b) => a.DISTANCE - b.DISTANCE < 0 ? -1 : 1);

        if (!cities_distances_sorted.length) {
            return 'Нет маршрута в выбранный город';
        } else {
            console.log(cities_distances_sorted, '12345')
            return `Ближайший с вами город №${cities_distances_sorted[0].SRC_CITY_ID} в котором есть склад, расстояние: ${cities_distances_sorted[0].DISTANCE}`;
        }
    },
};
