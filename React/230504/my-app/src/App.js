import './App.css';
// import Menu from './components/menu/Menu'
// import NewMenu from './components/newMenu/NewMenu'
import TripList from './components/trip/TripList';

function App() {

  const name = "라이캣!!";
  const 변수 = "value";
  function 함수() {
    console.log('함수 함수!')
  }
  const 값 = true;

  const today = new Date
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();



  return (
    <div>
      {/* <NewMenu /> */}
      {/* <Menu /> */}
      <h1 hello="hi" >안녕 {name}!!</h1>
      <h1 style={{}}>안녕 {name} 2호!!</h1>
      <div className="today">
        <p>년: {year}</p>
        <p>월/일: {`${month}/${date}`}</p>
        <p>시간: {`${hour}시 ${minute}분 ${second}초`}</p>
      </div>

      <TripList />
    </div>
  );
}

export default App;