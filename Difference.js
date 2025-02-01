//Difference

function difference(array, values) {
  return array.filter((val) => !values.includes(val));
}

const result = difference([1, , 3], [2]);

console.log(result);
