//Compact

function compact(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      answer.push(array[i]);
    }
  }
  return answer;
}

const result = compact(["hello", 123, [], {}, function () {}]);

console.log(result);
