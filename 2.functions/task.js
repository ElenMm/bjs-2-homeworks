function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let counter = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    counter += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min)
      min = arr[i];
  }
  
  avg = Number((counter / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
   counter += arr[i];
  }

  return counter;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let summEvenElement = 0;
  let summOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      summEvenElement += arr[i];
    } else {
      summOddElement += arr[i];
    }
  }

  return summEvenElement - summOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let counter = 0;
  let summEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      summEvenElement += arr[i];
      counter++;
    }
  }

  return summEvenElement / counter;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  
  return maxWorkerResult;
}
