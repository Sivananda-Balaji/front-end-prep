//Array.prototype.square

Array.prototype.square = function () {
  const answer = [];
  for (let i = 0; i < this.length; i++) {
    answer.push(this[i] * this[i]);
  }
  return answer;
};

const result = [-2].square();

console.log(result);
