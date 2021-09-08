import { createContext, useState } from "react";

const CodeContext = createContext();

const CodeProvider = ({ children }) => {
  const [timerInterval, setTimerInterval] = useState(null);

  const value = {
    state: { timerInterval },
    actions: { setTimerInterval },
  };
  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};

const { Consumer: CodeConsumer } = CodeContext;

export { CodeProvider, CodeConsumer };

export default CodeContext;
