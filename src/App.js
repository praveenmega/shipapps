import React, { useState } from "react";
import Sidedrawer from "./Sidedrawer";
import Toolbar from "./Toolbar";
import Blogpost from "./Blogpost";
import posts from "./posts";
import footerdata from "./footerdata";
import bg1 from "./assets/bg1.jpg";
import ss from "./assets/ss.png";
import phone from "./assets/phone.jpg";
import photo from "./assets/photo.jpg";
import logobw from "./assets/logobw.png";

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
      <main className="bg-gray-800 lg:pb-10">
        <div className="pt-10 mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:text-left 
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
            <div className="mt-12 -mb-0 lg:mt-0">
              <img
                className="w-full opacity-10 border-opacity-5 lg:h-full"
                src={bg1}
                alt="bg image"
              />
            </div>
          </div>
        </div>
      </main>

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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="mt-12">
            <img
              className="mx-auto rounded shadow-xl"
              src={ss}
              alt="screenshot"
            />
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <div className="mt-12 bg-white">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-lg mt-12 px-6 py-8 bg-gray-200">
                <div className="-mt-14">
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="rounded-lg mt-12 px-6 py-8 bg-gray-200">
                <div className="-mt-14">
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="rounded-lg mt-12 px-6 py-8 bg-gray-200">
                <div className="-mt-14">
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feature with image */}
      <div className="mt-20">
        <div>
          <div className="px-4">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden">
              <img
                className="object-cover "
                src={phone}
                alt="browsing internet"
              />
            </div>
          </div>
        </div>
        <div class="-mt-28 pt-36 pb-20 bg-gradient-to-r from-pink-400 to-red-500">
          <blockquote>
            <div>
              <p className="text-left text-2xl px-2 font-medium text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
            <footer className="text-left text-lg px-2 font-medium mt-6 text-white">
              <p>Judith Black</p>
              <p>CEO at Pureinsights</p>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* blog section */}
      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-lg font-semibold uppercase tracking-wider text-pink-400">
              Learn
            </p>
            <h2 className="mt-2 text-3xl tracking-tight font-extrabold text-gray-900">
              Helpful resources
            </h2>
            <p className="mt-5 text-xl text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => {
              return (
                <Blogpost
                  key={post.title}
                  title={post.title}
                  category={post.category}
                  description={post.description}
                  src={post.src}
                  alt={post.alt}
                  author={post.author}
                  img={post.img}
                  date={post.date}
                  length={post.length}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* cta section */}
      <div className="relative bg-gray-800">
        <div className="relative h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={photo}
            alt="laptop"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Award winning support
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              We're here to help
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center rounded-md shadow bg-white">
                <a
                  href="#"
                  className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
                >
                  Visit the help center
                </a>
                <svg
                  className="-ml-3 mr-4 h-5 w-5 text-gray-400 justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <footer className="bg-gray-50">
        <h2 className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-6 md:px-8">
          <div className="md:grid md:grid-cols-3 items-center">
            <div className="space-y-8 md:col-span-1">
              <img className="h-10" src={logobw} alt="logo" />
              <p className="text-gray-500 text-base">
                Making the world a better place through constructing hierarchies
              </p>
            </div>
            <div className="mt-12 md:mt-0 md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Solutions
                  </h3>
                  <ul className="mt-4 space-y-4 list-none">
                    {footerdata.map((data) => {
                      return (
                        <li>
                          <a
                            href="#"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4 list-none">
                    {footerdata.map((data) => {
                      return (
                        <li>
                          <a
                            href="#"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3 className="mt-5 sm:mt-0 text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4 list-none">
                    {footerdata.map((data) => {
                      return (
                        <li>
                          <a
                            href="#"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3 className="mt-5 sm:mt-0 text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4 list-none">
                    {footerdata.map((data) => {
                      return (
                        <li>
                          <a
                            href="#"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Workflow, Inc, All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
