import React from "react";

function Blogpost(props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-pink-500">
            <a href="#" class="hover:underline">
              {props.category}
            </a>
          </p>
          <a href="#" class="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">{props.author}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={props.img}
                alt={props.author}
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm text-left font-bold text-gray-900">
              <a href="#" className="hover:underline">
                {props.author}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{props.date}</time>
              <span>{props.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogpost;
