let clapTimes = 59;
let p_num = 0;

let curr_clap = 0;

while (true) {
  if (p_num === 0 || p_num === 1) p_num++;
  else {
    curr_clap = ((p_num - 1) * p_num) / 2;
    if (curr_clap > clapTimes) {
      curr_clap = ((p_num - 2) * (p_num - 1)) / 2;
      break;
    }
    p_num++;
  }
}

const res = [clapTimes - curr_clap, p_num];
console.log(res);
