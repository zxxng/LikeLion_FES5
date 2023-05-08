import React, { Fragment } from 'react';
import './FragmentTest.css';

function ListItem({ item }) {
  return (
    <div>
      <dt>사과</dt>
      <dd>사과는 가을이 제철이죠!</dd>
    </div>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      {/* {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}


// function MyComponent() {
//   return (
//     <React.Fragment className="my-fragment">
//       <h1 className="my-fragment">리엑트프레그먼트</h1>
//       <p className="my-fragment">테스트입니다!</p>
//     </React.Fragment>
//   );
// }

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

// function ItemList() {
//   return (
//     items.map((el) => {
//       return (
//         <>
//           <dt>{el.name}</dt>
//           <dd>{el.desc}</dd>
//         </>
//       )
//     })
//   );
// }

function ItemList() {
  const itemList = items.map(({ id, name, desc }) => {
    return (<React.Fragment key={id}>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </React.Fragment>);
  });

  return (
    <dl>
      {itemList}
    </dl>
  )
}

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호!</h1>
			<h2>안녕, 라이캣 2호!</h2>
      <ItemList />
    </div>
  );
}
export default App;
