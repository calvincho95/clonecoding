import React from "react";
import TopBanner from "./components/TopBanner";
import MainScreen from "./components/MainScreen";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto,1fr] min-h-screen">
        <TopBanner />
        <MainScreen />
        <SecondPage />
        <ThirdPage />
      </div>
    </>
  );
}

export default App;
