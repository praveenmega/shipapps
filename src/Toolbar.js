import React from "react";
import logo from "./assets/logo.png";

function Toolbar(props) {
  return (
    <header className="flex bg-gray-800 p-3 items-center justify-between">
      <div>
        <img className="w-10 h-10 ml-4" src={logo} alt="logo" />
      </div>
      <div
        className="text-white mr-4 space-y-1 sm:hidden"
        onClick={props.openedSide}
      >
        <div className="h-1 w-8 bg-white rounded-sm"></div>
        <div className="h-1 w-8 bg-white rounded-sm"></div>
        <div className="h-1 w-8 bg-white rounded-sm"></div>
      </div>
      <div className="hidden sm:flex flex-1">
        <div className="text-white text-xl flex-1 text-center">
          <a href="#">Products</a>
        </div>
        <div className="text-white text-xl flex-1 text-center">
          <a href="#">Marketplace</a>
        </div>
        <div className="text-white text-xl flex-1 text-center">
          <a href="#">Partners</a>
        </div>
        <div className="text-white text-xl flex-1 text-center">
          <a href="#">Company</a>
        </div>
        <div className="text-white text-xl flex-1 text-center">
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  );
}
export default Toolbar;