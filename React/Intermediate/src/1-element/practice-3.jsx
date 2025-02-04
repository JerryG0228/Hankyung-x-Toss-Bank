//연습문제3: 다음의 객체배열의 데이터를 출력하시오.
//목표: props로 전달받은 객체 배열의 데이터를 조작할 수 있다.
//요구사항
// 1. 상품이름 - 가격(원)으로 출력한다.
// 출력 예) 1. 노트북 - 8000원
//          2. 스마트폰 - 4000원
// const products = [
//   { id: 1, name: "노트북", price: 8000 },
//   { id: 2, name: "스마트폰", price: 4000 },
//   { id: 3, name: "태블릿", price: 6000 },
// ];

const info = (props) => {
  return (
    <>
      {props.map((v, idx) => {
        return (
          <div key={v.id}>
            {idx + 1}. {v.name} - {v.price}원
          </div>
        );
      })}
    </>
  );
};

export { info };
