let n = "123456";
let loc = n.length - 3;

while (n[loc - 1]) {
  n = n.slice(0, loc) + "," + n.slice(loc);
  loc -= 3;
}

console.log(n);
