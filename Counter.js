//Make Counter

function makeCounter(initialValue = 0) {
  return () => {
    return initialValue++;
  };
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
