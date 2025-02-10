// 연습문제 1: 조건부 렌더링과 키 사용
// 아래의 tasks 배열을 활용하여, 완료된 작업과 완료되지 않은 작업을 분리하여 렌더링하는 컴포넌트를 작성하세요.
// 요구사항
// 1. 완료된 작업은 <h3>완료된 작업</h3> 아래에 리스트로 렌더링합니다.
// 2. 완료되지 않은 작업은 <h3>할 일 목록</h3> 아래에 렌더링합니다.
// 3. filter()함수를 사용하여, tasks 배열을 2개 생성후 사용한다.

import { useEffect, useState } from "react";

export function TaskList() {
  const tasks = [
    { id: 1, text: "React 공부하기", completed: true },
    { id: 2, text: "운동하기", completed: false },
    { id: 3, text: "저녁 먹기", completed: false },
    { id: 4, text: "독서하기", completed: true },
  ];

  const completed = tasks.filter((v) => v.completed);
  const notCompleted = tasks.filter((v) => !v.completed);

  return (
    <>
      <h3>완료된 작업</h3>
      <ul>
        {completed.map((v, idx) => {
          return <li key={v + idx}>{v.text}</li>;
        })}
      </ul>
      <h3>할 일 목록</h3>
      <ul>
        {notCompleted.map((v, idx) => {
          return <li key={v + idx}>{v.text}</li>;
        })}
      </ul>
    </>
  );
}
