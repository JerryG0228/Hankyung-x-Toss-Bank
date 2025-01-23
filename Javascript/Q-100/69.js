const num = 100;

const isPrime = (n) => {
  if (n < 2) return false;
  let prime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const primes = Array.from({ length: num }, (_, i) => i).filter((v) =>
  isPrime(v)
);
const res = [];

primes.map((v, i, arr) => {
  for (let k = i; k < arr.length; k++) {
    if (v + arr[k] === num) res.push([v, arr[k]]);
  }
});

console.log(res);
console.log(`가장 차가 큰 것: ${res[0][0]} + ${res[0][1]}`);
console.log(`가장 차가 작은 것: ${res[res.length-1][0]} + ${res[res.length-1][1]}`);
