let weight = 28;
const seven = parseInt(weight / 7);
weight -= 7 * seven;
const three = parseInt(weight / 3);
weight -= 3 * three;

weight ? console.log(-1) : console.log(seven + three);
