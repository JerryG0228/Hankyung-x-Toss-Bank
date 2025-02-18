//Lifecycle.jsx
// 리액트 라이프사이클(생애주기)의 개념
// 리액트의 라이프사이클은 컴포넌트가 생성되고, 업데이트되며,
// 제거될 때 일어나는 일련의 과정을 의미합니다.
// 클래스형 컴포넌트에서 더 명확하게 사용되었지만,
// 함수형 컴포넌트에서는 useEffect Hook을 통해 비슷한 동작을 구현할 수 있습니다.

// 리액트 컴포넌트 라이프사이클의 3단계
// 1. 마운트 (Mount): 컴포넌트가 처음 DOM에 추가될 때 발생하는 단계
// 2. 업데이트 (Update): 상태나 props가 변경되어 컴포넌트가 다시 렌더링될 때 발생하는 단계
// 3. 언마운트 (Unmount): 컴포넌트가 DOM에서 제거될 때 발생하는 단계

// 클래스형 컴포넌트의 주요 라이프사이클 메서드
// componentDidMount(): 컴포넌트가 처음 렌더링된 후 실행
// componentDidUpdate(): 컴포넌트가 업데이트된 후 실행
// componentWillUnmount(): 컴포넌트가 언마운트(제거)되기 직전에 실행

import { useState } from "react";
import { Component } from "react";

export class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("마운트됨");
  }
  componentWillUnmount() {
    console.log("언마운트됨");
  }
  componentDidUpdate() {
    console.log("업데이트됨", this.state.count);
  }

  render() {
    return (
      <div>
        <h1>리액트 라이프사이클(클래스형)</h1>
        <p>Count:{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export function Lifecycle2() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <div style={{ padding: "20px" }}>{showComponent && <Lifecycle />}</div>
      <button onClick={() => setShowComponent(!showComponent)}>
        마운트버튼
      </button>
    </div>
  );
}
