//Chunk

function chunk(array, size = 1) {
  const answer = [];
  const temp = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    temp.push(array[i]);
    if (count === size) {
      answer.push([...temp]);
      temp.length = 0;
      count = 0;
    }
  }
  array.length > 0 && temp.length > 0 && answer.push([...temp]);
  return answer;
}

const result = chunk([1, 2, 3]);

console.log(result);
