const args = process.argv.slice(2);

let sortedArr = args.sort((a, b) => a - b);

for (const i in sortedArr) {
  setTimeout(() => {
    if (sortedArr[i] > 0) {
      console.log(`${sortedArr[i]} seconds`);
      process.stdout.write("\x07");
    }
  }, sortedArr[i] * 1000);
}
