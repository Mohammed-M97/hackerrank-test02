function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}

let s = 7;
let t = 10;
let a = 4;
let b = 12;
let apples = [2, 3, -4];
let oranges = [3, -2, -4];
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
