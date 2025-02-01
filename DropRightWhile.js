//Drop Right While

function dropRightWhile(array, predicate) {
  let index = array.length - 1;
  while (index >= 0 && predicate(array[index], index, array)) {
    index--;
  }
  return array.slice(0, index + 1);
}

const result = dropRightWhile([1, , 3, 4, 5], (value) => value === undefined);

console.log(result);
