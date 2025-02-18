/**
 * 연습문제 1: 두 개의 숫자 입력 필드의 합 계산하기 (State 끌어올리기)
    문제 설명:
    두 개의 숫자 입력 필드를 만들고 입력한 숫자들의 합을 부모 컴포넌트에서 
    실시간으로 계산하여 출력합니다.
 */

import { useState } from "react";

function InputField1({ value, onChange }) {
  return (
    <div>
      <label>자식1: 입력 필드 1: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function InputField2({ value, onChange }) {
  return (
    <div>
      <label>자식2: 입력 필드 2: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function LiftingStateUp() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div>
      <InputField1 value={text1} onChange={setText1} />
      <InputField2 value={text2} onChange={setText2} />
      <h3>계산 값: {Number(text1) + Number(text2)}</h3>
    </div>
  );
}

/**
 * 연습문제2: 선택한 리스트 항목 표시하기 (State 끌어올리기)
 * 문제 설명:
    리스트에 여러 항목(예: 과일 목록)이 주어져 있고, 사용자가 항목을 선택하면 
    선택한 항목들이 부모 컴포넌트에서 관리되어 화면에 표시됩니다.

    const items = ["사과", "바나나", "오렌지", "수박", "포도"];

    요구사항
    항목을 클릭하면 선택된 항목들이 부모 컴포넌트에 저장되어 표시됩니다.
    이미 선택된 항목을 클릭하면 해당 항목이 선택 목록에서 제거됩니다.
    상태는 부모 컴포넌트에서 관리합니다.
 */

function ChildFruit({ fruit, setFruit }) {
  const items = ["사과", "바나나", "오렌지", "수박", "포도"];

  const handleBtn = (f) => {
    if (fruit.includes(f)) {
      const temp = fruit.filter((v) => v !== f);
      setFruit(temp);
    } else {
      setFruit((prev) => [...prev, f]);
    }
  };

  return (
    <>
      {items.map((v) => {
        return (
          <button key={v} onClick={() => handleBtn(v)}>
            {v}
          </button>
        );
      })}
    </>
  );
}

export function ParentFruit() {
  const [fruit, setFruit] = useState([]);

  return (
    <>
      <ChildFruit fruit={fruit} setFruit={setFruit} />
      <ul>
        {fruit.map((v, idx) => {
          return <li key={v + idx}>{v}</li>;
        })}
      </ul>
    </>
  );
}
