import { useState } from "react";
import Intro from "./components/Intro";
import Content from "./components/Content";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      <Content />
    </>
  );
}

export default App;
