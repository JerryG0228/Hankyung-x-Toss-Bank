//연습문제2: props를 이용해 이름과 나이 출력하기
// 목표: props로 전달받은 이름과 나이를 사용자 정의 컴퍼넌트에 출력한다.
// 요구사항
// 1. Greeting 함수형 컴퍼넌트를 만들고, props로 전달받은 name과 age를
//   출력한다.
// 2. 출력양식 : 안녕하세요, 홍길동님! 당신의 나이는 25살입니다.

const Greeting = (props) => (
  <>
    <div>
      안녕하세요, {props.name}님! 당신의 나이는 {props.age}살입니다.
    </div>
  </>
);

export { Greeting };
