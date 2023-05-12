import React from "react";
import Question from "./components/Question";
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className="text">
            상세정보
          </li>
          <li id="qa" className="text">
            Q&A
          </li>
          <li id="review" className="text">
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;