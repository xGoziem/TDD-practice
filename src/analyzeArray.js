export default function analyzeArray(array) {
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length
  }
}

function getAverage(array) {
  if (array.length === 0) {
    return null;
  }

  let sum = array.reduce((acc, cur) => acc + cur);
  let avg = sum / array.length;
  return avg;
}

function getMin(array) {
  if (array.length === 0) {
    return null;
  }

  return Math.min.apply(null, array);
}

function getMax(array) {
  if (array.length === 0) {
    return null;
  }

  return Math.max.apply(null, array);
}
