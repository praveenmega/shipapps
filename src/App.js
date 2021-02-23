import React, { useState } from "react";
import Sidedrawer from "./Sidedrawer";
import Toolbar from "./Toolbar";
import bg1 from "./assets/bg1.jpg";

function App() {
  const [showsidedrawer, setShowSideDrawer] = useState(false);

  const showSideDrawerHandler = () => {
    setShowSideDrawer(true);
  };

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <div className="bg-gray-800">
      <Toolbar openedSide={showSideDrawerHandler} />
      <Sidedrawer opened={showsidedrawer} closed={closeSideDrawerHandler} />
      <main className="mt-10 sm:mt-24 mx-3">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left 
            lg:flex lg:items-center"
            >
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 
                  sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span
                    className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase
                  tracking-wide bg-gradient-to-r from-pink-400 to-red-600 rounded-full"
                  >
                    We are hiring
                  </span>
                  <span className="ml-4 text-sm">Visit our careers page</span>
                  <svg
                    className="ml-2 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <h1
                  className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none 
                lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span className="block">A better way to</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500 block">
                    Ship web apps
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <div className="mt-10">
                  <form action="">
                    <div>
                      <label for="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md text-base text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div className="mt-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 rounded-md bg-gradient-to-r from-pink-400 to-red-600 text-white 
                        font-medium hover:from-pink-500 hover:to-red-700"
                      >
                        Start free trial
                      </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-300">
                      Start your free 14 day trial, no credit card necessary, By
                      providing your email, you agree to our{" "}
                      <a href="#" className="font-medium text-white">
                        terms or service
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-32">
              <img className="opacity-20" src={bg1} alt="bg image" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
