import MyList from "./components/MyList";
import ProductList from "./components/ProductList";
import Hello from "./components/Hello";
import { useState } from 'react';
import Count from "./components/Count";
import NavBar from "./components/App2";


function App() {
  return (
    <div>
      {/* hello world */}
      {/* <Blog posts={posts}/> */}
      {/* <Hello name="licat"/>
      <MyList />
      <ProductList /> */}
      <Count />
      <Hello2 />
      <NavBar />
    </div>
  );
}

function Hello2(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}

function One(props){
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

function Two(props){
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  )
}


export default App;
