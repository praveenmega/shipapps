import React from "react";
import logo from "./assets/logo.png";
import close from "./assets/close.png";

function Sidedrawer(props) {
  return (
    <div
      className={`fixed w-full top-0 left-0 z-200 bg-white ${
        props.opened ? "" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center p-8">
        <img className="w-10 h-10 ml-4" src={logo} alt="logo" />
        <div onClick={props.closed}>
          <img className="w-10 h-10 ml-4" src={close} alt="close" />
        </div>
      </div>
      <div>
        <div className="p-4 text-xl font-bold">
          <a href="#">Products</a>
        </div>
        <div className="p-4 text-xl font-bold">
          <a href="#">Marketplace</a>
        </div>
        <div className="p-4 text-xl font-bold">
          <a href="#">Partners</a>
        </div>
        <div className="p-4 text-xl font-bold">
          <a href="#">Company</a>
        </div>
        <div className="flex flex-col">
          <button className="mx-8 bg-gradient-to-r from-pink-400 to-red-600 text-white text-center text-3xl font-bold p-4 rounded-lg">
            Start free trial
          </button>
          <div className="mt-6 text-center text-2xl">
            Existing Customer?
            <a href="#" className="font-bold ml-2">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidedrawer;