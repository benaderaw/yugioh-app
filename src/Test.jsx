import "./Test.css";
import { useState } from "react";

export default function Test() {
  const [word, setWord] = useState("cats");
  const [word02, setWord02] = useState("cats");

  function handleChange(e) {
    setWord(e.target.value);
  }

  function handleClick() {
    setWord("cats");
  }

  return (
    <div>
      <h2>What do you like?</h2>
      <select value={word} onChange={handleChange}>
        <option value="select option">select option</option>
        <option value="cats">cats</option>
        <option value="dogs">dogs</option>
        <option value="monkeys">monkeys</option>
        <option value="dolphins">dolphins</option>
        <option value="lions">lions</option>
      </select>

      <h2>What do you hate?</h2>
      <select value={word} onChange={handleChange}>
        <option value="select option">select option</option>
        <option value="salad">salad</option>
        <option value="work">work</option>
        <option value="blood">blood</option>
        <option value="wine">wine</option>
        <option value="cheese">cheese</option>
      </select>

      <button onClick={handleClick}>reset</button>
    </div>
  );
}
