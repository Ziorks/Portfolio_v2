import { useState } from "react";
import Intro from "./components/Intro";
import Content from "./components/Content";
import { Outlet } from "react-router-dom";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default App;
