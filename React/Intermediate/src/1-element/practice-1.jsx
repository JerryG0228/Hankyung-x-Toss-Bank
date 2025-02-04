// 연습문제1: 동적 표현식 렌더링
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Namecard 컴포넌트를 만들고, user 객체의 정보를 JSX에 넣어서
//   표현한다.
// 2. props는 사용안함.

const user = {
  firstName: "김",
  lastName: "민수",
  age: 30,
};

const Namecard = (
  <>
    <div>성: {user.firstName}</div>
    <div>이름: {user.lastName}</div>
    <div>나이: {user.age}</div>
  </>
);

export { Namecard };
