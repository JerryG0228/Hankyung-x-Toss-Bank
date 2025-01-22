let a = [1, 2, 3, 4];
let b = ["a", "b", "c", "d"];
let res = [];

a.forEach((v) => {
  res.push([v]);
});
b.forEach((v, idx) => {
  res[idx].push(v);
});

console.log(res);
