//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요. (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

import { useState } from "react";

export function Colorbox() {
  const [text, setText] = useState("마우스 올려보세요!");
  const [color, setColor] = useState("teal");

  const handleColor = () => {
    if (color === "teal") {
      setText("마우스가 들어왔습니다");
      setColor("tomato");
    } else {
      setText("마우스가 나갔습니다");
      setColor("teal");
    }
  };

  return (
    <>
      <div>{text}</div>
      <div
        className="box"
        style={{ backgroundColor: color, width: "200px", height: "auto" }}
        onMouseEnter={() => handleColor()}
        onMouseLeave={() => handleColor()}
      >
        hello
      </div>
    </>
  );
}

//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export function Information() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("이름:", name, "나이", age);
    setName("");
    setAge("");
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export function Limited() {
  const [val, setVal] = useState("");
  const [len, setLen] = useState(10);

  const handleLen = (v) => {
    const temp = 10 - v.length;
    setLen(temp);
  };

  return (
    <>
      <div>남은 글자 수: {len}</div>
      <input
        type="text"
        maxLength={10}
        onChange={(e) => {
          setVal(e.target.value);
          handleLen(e.target.value);
        }}
      />
    </>
  );
}
