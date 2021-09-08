import "./App.css";
import RandomCode from "./components/RandomCode";
import RandomSetting from "./components/RandomSetting";
import { CodeProvider } from "./contexts/code";
import styled from "styled-components";

const CodeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <CodeProvider>
      <CodeDiv>
        <RandomSetting />
        <RandomCode />
      </CodeDiv>
    </CodeProvider>
  );
}

export default App;
