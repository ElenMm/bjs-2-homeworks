"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let disc = b ** 2 - 4 * a * c;

  if (disc === 0) {
    let root1 = (- b / (2 * a));
    arr.push(root1);
  } else if (disc > 0) {
    let root1 = (- b + Math.sqrt(disc)) / (2 * a);
    let root2 = (- b - Math.sqrt(disc)) / (2 * a);
    arr.push(root1, root2)
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let factorPercent = percent / 100;
  let monthsPercent = factorPercent / 12;
  let creditBody = amount - contribution;
  let monthsPay = creditBody * (monthsPercent + (monthsPercent / (((1 + monthsPercent)** countMonths) - 1)));
  let pay = monthsPay * countMonths;
  
  return Number(pay.toFixed(2));
}
