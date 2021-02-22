import React, { useState } from "react";
import Sidedrawer from "./Sidedrawer";
import Toolbar from "./Toolbar";

function App() {
  const [showsidedrawer, setShowSideDrawer] = useState(false);

  const showSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <div>
      <Toolbar openedSide={showSideDrawerHandler} />
      <Sidedrawer opened={showsidedrawer} closed={closeSideDrawerHandler} />
    </div>
  );
}

export default App;
