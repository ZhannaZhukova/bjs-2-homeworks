function getArrayParams(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let min = arr[0];
  let max = arr[0];
  max = Math.max(...arr);
  min = Math.min(...arr);
  let sum = arr.reduce(
      function (accumulator, currentValue) {
          return accumulator + currentValue;
      });
  let avg = Number((sum / arr.length).toFixed(2));
  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sum = 0;
  sum = arr.reduce(
      function (accumulator, currentValue) {
          return accumulator + currentValue;
      }, sum);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let differenceMaxMinWorker = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  differenceMaxMinWorker = max - min;
  return differenceMaxMinWorker;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
      } else {
          sumOddElement += arr[i];
      }
  }
  let dif = sumEvenElement - sumOddElement;
  return dif;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
          countEvenElement++;
      }
  }
  avg = sumEvenElement / countEvenElement;
  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let arr of arrOfArr) {
      const result = func(...arr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  return maxWorkerResult;
}