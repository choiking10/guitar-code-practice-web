import React, { useCallback, useContext, useState } from "react";
import CodeContext from "../contexts/code";

const RandomSetting = () => {
  const { actions } = useContext(CodeContext);
  const [timerIntervalInput, setTimerIntervalInput] = useState("1000");

  const onChange = (e) => {
    setTimerIntervalInput(e.target.value);
  };
  const onStart = useCallback(
    (e) => {
      actions.setTimerInterval(parseInt(timerIntervalInput));
      e && e.preventDefault();
    },
    [timerIntervalInput, actions]
  );

  const onStop = useCallback(
    (e) => {
      actions.setTimerInterval(null);
      e && e.preventDefault();
    },
    [actions]
  );
  return (
    <div>
      <form onSubmit={onStart}>
        <input onChange={onChange} value={timerIntervalInput} />
        <button onClick={onStart}>start</button>
        <button onClick={onStop}>stop</button>
      </form>
    </div>
  );
};

export default React.memo(RandomSetting);
