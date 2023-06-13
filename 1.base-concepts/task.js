"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let x;
	let y;
	let dsrt = b ** 2 - 4 * a * c;
	if (dsrt < 0) {
		return arr;
	} else if (dsrt === 0) {
		x = -b / (2 * a);
		arr.push(x)
	} else {
		x = (-b + Math.sqrt(dsrt)) / (2 * a);
		y = (-b - Math.sqrt(dsrt)) / (2 * a);
		arr.push(x, y);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let n = countMonths;
  let S = amount - contribution;
  let monthlyFee = S * (P + (P / (((1 + P)**n) - 1)))
  let total = monthlyFee*countMonths;
  return parseFloat(total.toFixed(2));
}
calculateTotalMortgage(10, 0, 50000, 12)