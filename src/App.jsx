import { useState } from "react";
import Intro from "./components/Intro";
import Background from "./components/Background";
import Nav from "./components/Nav";

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showLoading && (
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "100%",
            position: "fixed",
          }}
        />
      )}
      {showIntro && (
        <div id="intro-container">
          <Intro
            onStart={() => {
              setShowLoading(false);
            }}
            onFinish={() => setShowIntro(false)}
          />
        </div>
      )}
      <div id="bg-container">
        <Background />
      </div>
      <Nav />
      <h1>Lorem ipsum dolor</h1>
    </>
  );
}

export default App;
