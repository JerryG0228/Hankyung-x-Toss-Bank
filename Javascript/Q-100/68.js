let busTimes = ["12:30", "13:20", "14:13"];
let now = "12:40".split(":");
let res = [];

busTimes.map((v) => {
  v = v.split(":");
  if (v[0] < now[0] || (v[0] === now[0] && v[1] < now[1]))
    res.push("지나갔습니다.");
  else {
    let nowTime = Number(now[0]) * 60 + Number(now[1]);
    let busTime = Number(v[0]) * 60 + Number(v[1]);
    let diff = busTime - nowTime;

    let h = String(Math.floor(diff / 60));
    if (h.length === 1) h = "0" + h;
    let m = String(Math.floor(diff % 60));
    if (m.length === 1) m = "0" + m;

    res.push(`${h}시 ${m}분`);
  }
});

console.log(res);
