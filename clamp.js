function clamp(value, lower, upper) {
  if (value > lower && value < upper) {
    return value;
  } else if (value <= lower) {
    return lower;
  } else {
    return upper;
  }
}

const result = clamp(3, 0, 5);

console.log(result);
