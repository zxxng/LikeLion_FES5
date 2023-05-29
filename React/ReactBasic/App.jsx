// Button.jsx
function Button(props) {
  console.log(props);
  console.log(props.children);
  return (
    <button
      onClick={props.onClick}
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      {props.children}
    </button>
  );
}
function Counter(props) {
  const 실행시키면num증가 = () => {
    props.setNum(props.num + 1);
  };
  const 실행시키면num감소 = () => {
    props.setNum(props.num - 1);
  };
  return (
    <>
      <span>여기 숫자 {props.num}</span>
      <div>
        <span>이름:우경석</span>
      </div>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
    </>
  );
}
// HomePage.jsx
function HomePage() {
  const [num, setNum] = React.useState(0);

  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter num={num} setNum={setNum} />
      <div>{num * 2}</div>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HomePage />);
}

App();
