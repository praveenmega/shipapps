import React from "react";
import logo from "./assets/logo.png";
import close from "./assets/close.png";

function Sidedrawer(props) {
  return (
    <div
      className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${
        props.opened ? "" : "hidden"
      }`}
    >
      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="flex justify-between items-center p-3">
          <img className="w-10 h-10 ml-3" src={logo} alt="logo" />
          <div onClick={props.closed}>
            <img
              className="w-10 h-10 mr-3 opacity-50"
              src={close}
              alt="close"
            />
          </div>
        </div>
        <div>
          <div className="p-3 text-xl font-bold">
            <a href="#">Products</a>
          </div>
          <div className="p-3 text-xl font-bold">
            <a href="#">Marketplace</a>
          </div>
          <div className="p-3 text-xl font-bold">
            <a href="#">Partners</a>
          </div>
          <div className="p-3 text-xl font-bold">
            <a href="#">Company</a>
          </div>
          <div className="mt-4 flex flex-col">
            <button className="mx-8 bg-gradient-to-r from-pink-400 to-red-600 text-white text-center text-2xl font-bold p-2 rounded-lg">
              Start free trial
            </button>
            <div className="mt-4 mb-4 text-center text-xl">
              Existing Customer?
              <a href="#" className="font-bold ml-2">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidedrawer;
