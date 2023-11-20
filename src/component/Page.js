import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.png";

export default function Page() {
  return (
    <div>
      <section className="flex justify-center  items-start  py-8">
        <div className="container mx-auto flex justify-center lg:flex-row flex-col  items-center  gap-8">
          <div className="w-full lg:w-1/2 flex-1">
            <h1 className="text-3xl mb-4 text-red-500 font-bold ">
              Mine-To-Mill-To-Mine <br />
              Optimization
            </h1>
            <p className=" mb-4 font-serif text-sm">
              NTWIST’s newest product unlocks up to $250/oz in previously
              inaccessible value in open pit gold mines by connecting siloed
              data sources like block models, fleet management systems,
              stockpile surveys, and plant instruments. This allows your company
              to better track material flow, and feed properties, identify
              plan/production discrepancies, and correct resource models and
              production plans.
            </p>
            <button className="bg-[#FF3A2D] mb-4 rounded-md text-white font-bold py-2 px-4">
              Read More
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex-1">
            <div className="w-full h-full lg:h-auto">
              <img
                className="w-full h-full object-cover"
                src={img1}
                alt="NTwist Mining Machine Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2nd */}
      <section className=" container mx-auto    justify-center  flex flex-col lg:flex-row items-center py-8">
        <div className="lg:w-1/2  flex-1">
          <img
            className="customImg w-full lg:w-auto h-auto"
            src={img2}
            alt="Environment Sustainability Image"
          />
        </div>
        <div className="lg:w-1/2  flex-1 lg:pl-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-red-500">
            Sustainability
          </h1>
          <p className="font-serif mb-4 text-sm">
            Environmental stewardship is a priority for NTWIST. We help our
            customers minimize their sustainability impact on the planet.
            Emissions or environmental targets are used alongside productivity
            targets to define success for our customers.
          </p>
          <p className="font-serif mb-4 text-sm">
            With the increasing relevance of carbon accounting and emissions
            tracking, NTWIST offers a suite of tools to increase visibility into
            environmental performance and help processing plants track, manage,
            optimize, and report key metrics.
          </p>
          <button className="bg-[#FF3A2D] rounded-md text-white mb-4 font-bold py-2 px-4">
            Read More
          </button>
        </div>
      </section>
      {/* 3rd */}
      <section className="flex justify-center    py-8">
        <div className="container mx-auto flex justify-center lg:flex-row flex-col  items-center  gap-8">
          <div className="w-full lg:w-1/2 flex-1">
            <h1 className="text-3xl text-red-500 font-bold mb-4">
              Mineral Processing
            </h1>
            <p className=" font-serif text-sm mb-4">
              NTWIST offers a number of solutions for mills, concentrators, and
              leach plants. Our solutions help operations to reduce the effect
              of feed variability, avoid downtime and increase peak throughput
              while decreasing energy and reagent consumption.
            </p>
            <button className="bg-[#FF3A2D] mb-4 rounded-md text-white font-bold py-2 px-4">
              Read More
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex-1">
            <div className="w-full h-full lg:h-auto">
              <img
                className="w-full h-full object-cover"
                src={img3}
                alt="NTwist Mining Machine Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 4th */}
      <section className=" container mx-auto   justify-center  flex flex-col lg:flex-row items-center py-8">
        <div className="lg:w-1/2  flex-1">
          <img
            className="customImg w-full lg:w-auto h-auto"
            src={img4}
            alt="Environment Sustainability Image"
          />
        </div>
        <div className="lg:w-1/2  flex-1 lg:pl-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-red-500">
            Oil & Gas
          </h1>
          <p className="font-serif mb-4 text-sm">
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment
          </p>
          <p className="font-serif mb-4 text-sm">
            NTWIST helps Oil & Gas customers to analyze historical data,
            identify opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
          </p>
          <button className="bg-[#FF3A2D] rounded-md text-white mb-4 font-bold py-2 px-4">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
}
