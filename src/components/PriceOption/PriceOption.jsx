import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-purple-500 rounded-md p-5 m-6 text-center">
      <div>
        <h3>
          <span className="text-5xl font-bold text-white">${price}</span>
          <span className="text-2xl text-gray-200">/month</span>
        </h3>
        <p className="text-2xl py-4">{name}</p>
      </div>
      <div>
        {features.map((feature,index) => (
          <div className="flex items-center justify-center" key={index}>
            <CheckCircleIcon className="h-6 w-6 text-gray-600" />
            <p className="ml-2">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
