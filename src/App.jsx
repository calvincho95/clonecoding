import React from "react";
import TopBanner from "./components/TopBanner";
import MainScreen from "./components/MainScreen";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto,1fr] min-h-screen">
        <TopBanner />
        <MainScreen />
        {/* <SecondPage /> */}
      </div>
    </>
  );
}

export default App;
