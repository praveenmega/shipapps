import React from "react";
import logo from "./assets/logo.png";

function Toolbar(props) {
  return (
    <header className="flex bg-gray-800 p-3 items-center justify-between">
      <div className="flex flex-1">
        <div>
          <img className="w-10 h-10 ml-3" src={logo} alt="logo" />
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center lg:flex lg:flex-1">
          <div className="text-white text-base flex-1 text-center">
            <a href="#">Products</a>
          </div>
          <div className="text-white text-base flex-1 text-center">
            <a href="#">Marketplace</a>
          </div>
          <div className="text-white text-base flex-1 text-center">
            <a href="#">Partners</a>
          </div>
          <div className="text-white text-base flex-1 text-center">
            <a href="#">Company</a>
          </div>
          <div className=" sm:text-white sm:text-base sm:flex-1 sm:text-center lg:hidden">
            <a href="#">Login</a>
          </div>
          <div className=" sm:text-white sm:text-base sm:flex-1 sm:p-1 sm:bg-gray-700 sm:rounded-lg lg:hidden">
            <a href="#">Start free trial</a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
        <div className="text-white text-base text-right">
          <a href="#">Login</a>
        </div>
        <div className="text-white p-2 mr-3 ml-8 bg-gray-700 rounded-lg text-base text-right">
          <a href="#">Start free trial</a>
        </div>
      </div>

      <div
        className="text-white mr-3 space-y-1 sm:hidden"
        onClick={props.openedSide}
      >
        <div className="h-1 w-8 bg-white rounded-sm"></div>
        <div className="h-1 w-8 bg-white rounded-sm"></div>
        <div className="h-1 w-8 bg-white rounded-sm"></div>
      </div>
    </header>
  );
}
export default Toolbar;
