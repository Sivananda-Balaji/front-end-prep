//Mean

function mean(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    answer += array[i];
  }
  return answer / array.length;
}

const result = mean([1, 2, 2]);

console.log(result);
