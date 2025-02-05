// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

import { useState, useEffect } from "react";

export function Ex1() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);

  return <div></div>;
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.

export function Ex2() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    console.log("업데이트: ", cnt);
  }, [cnt]);

  return (
    <div>
      <button
        onClick={() => {
          setCnt((prev) => prev + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용

export function Ex3() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("언마운트");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div style={{ color: "tomato" }}>{timer}초</div>

      
    </div>
  );
}
