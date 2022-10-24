/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};
