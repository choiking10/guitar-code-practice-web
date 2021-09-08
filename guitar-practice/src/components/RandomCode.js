import React, { useContext, useEffect, useRef, useState } from "react";
import CodeContext from "../contexts/code";

const codeList = ["C", "D", "E", "G", "A"];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCode(except) {
  const exceptedCodeList = codeList.filter((code) => code !== except);
  return exceptedCodeList[getRandomInt(0, exceptedCodeList.length - 1)];
}
const Code = ({ interval }) => {
  const [code, setCode] = useState(getRandomCode());
  const bef = useRef(code);
  bef.current = code;
  useEffect(() => {
    const id = setInterval(() => {
      setCode(getRandomCode(bef.current));
    }, interval);
    setCode(getRandomCode(bef.current));
    return () => {
      clearInterval(id);
    };
  }, [setCode, interval]);

  return <h1 style={{ textAlign: "center" }}>{code}</h1>;
};

const RandomCode = () => {
  const { state } = useContext(CodeContext);
  const interval = state.timerInterval;

  return (
    <div style={{ height: "200px" }}>
      <h2> 코드 </h2>
      {interval && <Code interval={interval} />}
    </div>
  );
};

export default RandomCode;
