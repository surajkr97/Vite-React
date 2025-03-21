import React from "react";
import Image3 from "../../assets/Images/Image3.png";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={Image3} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Building innovative solutions, creating seamless user experiences,
              and enhancing performance with cutting-edge technologies!
              Developers thrive on challenges, crafting scalable applications
              with precision and creativity.
            </p>
            <p className="mt-4 text-gray-600">
              They solve complex problems, ensuring reliability, security, and
              efficiency at every stage. Continuous learning and adaptation
              drive progress in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
