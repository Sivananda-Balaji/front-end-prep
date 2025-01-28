//Sleep

async function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function main() {
  console.log("Hello!");
  await sleep(5000); // Sleep for 1000 milliseconds (1 second)
  console.log("Bye.");
}

main();
