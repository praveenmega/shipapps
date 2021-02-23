import React, { useState } from "react";
import Sidedrawer from "./Sidedrawer";
import Toolbar from "./Toolbar";
import bg1 from "./assets/bg1.jpg";
import ss from "./assets/ss.png";

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
      <main className="mt-10 sm:mt-24">
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
            <div className="mt-12 -mb-0">
              <img className="w-full opacity-20" src={bg1} alt="bg image" />
            </div>
          </div>
        </div>
        {/* feature section with screenshot */}
        <div className="bg-gray-50">
          <div className="px-4 pt-16 text-center">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-pink-400">
              Serverless
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
              No Server? No Problem
            </p>
            <p className="mt-5 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="mt-12">
              <img className="rounded shadow-xl" src={ss} alt="screenshot" />
            </div>
          </div>
        </div>

        {/* feature section grid */}
        <div className="bg-gray-50">
          <div className="px-4 pt-16 text-center">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-pink-400">
              Deploy Faster
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
              Everything you need to deploy your app
            </p>
            <p className="mt-5 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8">
                <div className="rounded-lg px-6 py-8">
                  <div>
                    <span
                      className="inline-flex p-3 bg-gradient-to-t 
                      from-pink-400 to-red-600 rounded-md shadow-lg"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Push to deploy
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="rounded-lg px-6 py-8">
                  <div>
                    <span
                      className="inline-flex p-3 bg-gradient-to-t 
                      from-pink-400 to-red-600 rounded-md shadow-lg"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    SSL certificates
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="rounded-lg px-6 py-8">
                  <div>
                    <span
                      className="inline-flex p-3 bg-gradient-to-t 
                      from-pink-400 to-red-600 rounded-md shadow-lg"
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Simple queues
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
