// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

import { useState } from "react";

export function PrintText() {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <div>입력값: {text}</div>
    </>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

export function Colorbox() {
  const [idx, setIdx] = useState(0);
  const colors = ["red", "green", "blue"];

  const handleBtn = () => {
    if (idx == 2) setIdx(0);
    else setIdx(idx + 1);
  };

  return (
    <>
      <button onClick={handleBtn}>색상 변경</button>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: colors[idx],
        }}
      ></div>
    </>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

export function Switch() {
  const [ck, setCk] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setCk(!ck)} />
      <div>{ck ? "ON" : "OFF"}</div>
    </>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.

export function LimitedNum() {
  const [num, setNum] = useState(1);

  const handleBtn = () => {
    if (num < 10) setNum(num + 1);
  };

  return (
    <>
      <button onClick={handleBtn}>증가</button>
      <div>현재 숫자: {num}</div>
    </>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export function AddList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setList((prev) => [...prev, text]);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleSubmit}>등록</button>
      <ul>
        {list.map((v, idx) => {
          return <li key={idx}>{v}</li>;
        })}
      </ul>
    </>
  );
}
