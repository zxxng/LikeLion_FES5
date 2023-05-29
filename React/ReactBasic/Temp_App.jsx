const { useState } = React;

function MyHeader({ pageName, a }) {
  // const { pageName, a } = props
  // 이 안에 pagaName이라는 키로 값을 가져올수있음
  // 마찬가지로 a라는 키로 값을 가져올 수 있다.

  return (
    <>
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
    </>
  );
}

// pageName="홈페이지" 이거는 아래처럼나온다
//
// props = {
//   pageName:"홈페이지"
//   a:"a"
// }
function Memo({title, idx}) {
  (title, idx) => {
    return (
      <>
        <div>{idx + 1}번 메모</div>
        <article>{title}</article>
      </>
    );
  };
}

function MemoList({titles})

function HomePage(params) {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...titles, title];
    setTitles(newTitles);
  };
  console.log(titles);
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      <br></br>

    </div>
  );
}

function App() {
  // const root = document.getElementById("root");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);
  // ReactDOM.render(<h1>아 이건 제목이야</h1>, root);
  root.render(<HomePage />);
}

App();