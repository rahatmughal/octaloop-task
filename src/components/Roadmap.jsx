import React, { useState } from "react";
import { bg_ring, bullet, next, previous } from "../assets";
import { roadmap, roadmap2 } from "../constants";
const Roadmap = () => {
  const [slider, setSlider] = useState(true);

  return (
    <>
      {/* Roadmap */}
      <div className="w-full relative flex justify-between overflow-x-hidden object-cover">
        {/* Slide 1 */}
        <div
          className={`relative ${
            !slider ? "-left-full" : "left-0"
          } transition-all duration-500 w-full object-cover lg:px-20 md:px-10 px-6 pt-10 flex flex-col items-center gap-3`}
        >
          <h2 className="font-zen-dots lg:text-4xl md:text-3xl text-2xl text-center">
            Road<span className="text-second-primary">map</span>
          </h2>

          <p className="global-paragraph w-full text-center tracking-wider">
            Guiding the fusion of culture, AI, and Web3 innovation
          </p>

          <div className="flex w-full h-full lg:py-[200px] md:pt-[160px] pt-10 xl:px-32 lg:px-20 md:px-10 ">
            {/* Border */}
            <div className="w-40 flex justify-start -mr-5 mt-5">
              <div className="w-0.5 md:h-[calc(100%-165px)] h-[calc(100%-320px)] border-l-4 border-l-second-primary border-dashed" />
            </div>

            <div className="w-full -ml-[155px] gap-[200px] flex-col md:flex hidden">
              {roadmap.map((item) => (
                <div key={item.id} className="flex gap-6 flex-col">
                  <div className="md:w-1/2 w-full flex items-center gap-4">
                    <img src={bullet} alt={bullet} className="w-8" />
                  </div>

                  <div className="w-full flex items-center gap-4">
                    <div className="w-8" />

                    <div
                      className={`w-full flex ${
                        item.id % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row"
                      } md:items-center items-start md:justify-between relative xl:h-[140px] h-full rounded-sm bg-second-primary p-6`}
                    >
                      <div className="lg:w-3/4 md:w-4/5 w-full -mt-[100px] flex flex-col xl:gap-0 gap-5">
                        <div className="xl:w-3/4 lg:w-3/5 w-4/5 md:flex hidden xl:h-16 h-12 bg-second-primary/30 px-5 items-center">
                          <span className="xl:text-2xl text-xl text-second-primary font-zen-dots">
                            {item.label}
                          </span>
                        </div>

                        <div
                          className={` flex flex-col justify-end ${
                            item.bullets.length === 5
                              ? "xl:h-[160px] h-[140px]"
                              : "xl:h-[140px] h-[120px]"
                          }`}
                        >
                          <ul className="list-disc pl-6 w-4/5 lg:text-base text-sm">
                            {item.bullets.map((li, i) => (
                              <li key={i}>{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 md:block hidden"></div>

                      <>
                        <video
                          className={`xl:h-[400px] lg:h-[350px] md:h-[280px] h-[150px] absolute -z-10 ${
                            item.id % 2 === 0
                              ? "lg:-left-16 md:-left-10 left-0"
                              : "md:-right-10 right-0"
                          } lg:-bottom-10 lg:-top-[210px] -top-[120px]`}
                          autoPlay
                          muted
                          loop
                        >
                          <source src={bg_ring} type="video/mp4" />
                        </video>
                        <img
                          src={item.img}
                          alt={item.img}
                          className={`xl:h-[300px] lg:h-[260px] md:h-[210px] h-[120px] absolute bottom-0 ${
                            item.id % 2 === 0 ? "left-0" : "right-10"
                          }`}
                        />
                        <div className="w-10 h-10 border-t border-r border-white absolute -top-1.5 -right-1.5" />
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full -ml-[150px] gap-10 flex-col md:hidden flex">
              {roadmap.map((item) => (
                <div key={item.id} className="flex gap-6 flex-col md:hidden">
                  <div className="w-full flex items-center justify-start gap-3">
                    <img src={bullet} alt={bullet} className="md:w-8 w-6" />

                    <div className="w-full h-10 bg-second-primary/30 px-5 flex items-center">
                      <span className="text-sm text-second-primary font-zen-dots">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-3">
                    <div className="w-8" />

                    <div className="w-full flex flex-col h-full">
                      <div
                        className={`w-full h-full relative ${
                          item.id % 2 === 0 ? "self-end" : "self-start"
                        }`}
                      >
                        <video
                          className="h-[150px] -left-2 absolute -z-10"
                          autoPlay
                          muted
                          loop
                        >
                          <source src={bg_ring} type="video/mp4" />
                        </video>
                        <img
                          src={item.img}
                          alt={item.img}
                          className="h-[120px] relative"
                        />
                      </div>

                      <div className="w-full bg-second-primary p-6">
                        <ul className="list-disc">
                          {item.bullets.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-10 h-10 border-t border-r border-white absolute -top-1.5 -right-1.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute ${
            slider ? "-right-full" : "right-0"
          } transition-all duration-500 w-full object-cover lg:px-20 md:px-10 px-6 pt-10 flex flex-col items-center gap-3`}
        >
          <h2 className="font-zen-dots lg:text-4xl md:text-3xl text-2xl text-center">
            Road<span className="text-second-primary">map</span>
          </h2>

          <p className="global-paragraph w-full text-center tracking-wider">
            Guiding the fusion of culture, AI, and Web3 innovation
          </p>

          {/* Roadmap-slides */}
          <div className="flex w-full h-full lg:py-[200px] md:pt-[160px] pt-10 xl:px-32 lg:px-20 md:px-10 ">
            {/* Border */}
            <div className="w-40 flex justify-start -mr-5 mt-5">
              <div className="w-0.5 md:h-[calc(100%-165px)] h-[calc(100%-320px)] border-l-4 border-l-second-primary border-dashed" />
            </div>

            <div className="w-full -ml-[155px] gap-[200px] flex-col md:flex hidden">
              {roadmap2.map((item) => (
                <div key={item.id} className="flex gap-6 flex-col">
                  <div className="md:w-1/2 w-full flex items-center gap-4">
                    <img src={bullet} alt={bullet} className="w-8" />
                  </div>

                  <div className="w-full flex items-center gap-4">
                    <div className="w-8" />

                    <div
                      className={`w-full flex ${
                        item.id % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row"
                      } md:items-center items-start md:justify-between relative xl:h-[140px] h-full rounded-sm bg-second-primary p-6`}
                    >
                      <div className="lg:w-3/4 md:w-4/5 w-full -mt-[100px] flex flex-col xl:gap-0 gap-5">
                        <div className="xl:w-3/4 lg:w-3/5 w-4/5 md:flex hidden xl:h-16 h-12 bg-second-primary/30 px-5 items-center">
                          <span className="xl:text-2xl text-xl text-second-primary font-zen-dots">
                            {item.label}
                          </span>
                        </div>

                        <div
                          className={` flex flex-col justify-end ${
                            item.bullets.length === 5
                              ? "xl:h-[160px] h-[140px]"
                              : "xl:h-[140px] h-[120px]"
                          }`}
                        >
                          <ul className="list-disc pl-6 w-4/5 lg:text-base text-sm">
                            {item.bullets.map((li, i) => (
                              <li key={i}>{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="xl:w-1/3 lg:w-2/5 md:w-1/2 md:block hidden"></div>

                      <>
                        <video
                          className={`xl:h-[400px] lg:h-[350px] md:h-[280px] h-[150px] absolute -z-10 ${
                            item.id % 2 === 0
                              ? "lg:-left-16 md:-left-10 left-0"
                              : "md:-right-10 right-0"
                          } lg:-bottom-10 lg:-top-[210px] -top-[120px]`}
                          autoPlay
                          muted
                          loop
                        >
                          <source src={bg_ring} type="video/mp4" />
                        </video>
                        <img
                          src={item.img}
                          alt={item.img}
                          className={`xl:h-[300px] lg:h-[260px] md:h-[210px] h-[120px] absolute bottom-0 ${
                            item.id % 2 === 0 ? "left-0" : "right-10"
                          }`}
                        />
                        <div className="w-10 h-10 border-t border-r border-white absolute -top-1.5 -right-1.5" />
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full -ml-[150px] gap-10 flex-col md:hidden flex">
              {roadmap2.map((item) => (
                <div key={item.id} className="flex gap-6 flex-col md:hidden">
                  <div className="w-full flex items-center justify-start gap-3">
                    <img src={bullet} alt={bullet} className="md:w-8 w-6" />

                    <div className="w-full h-10 bg-second-primary/30 px-5 flex items-center">
                      <span className="text-sm text-second-primary font-zen-dots">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex items-center gap-3">
                    <div className="w-8" />

                    <div className="w-full flex flex-col h-full">
                      <div
                        className={`w-full h-full relative ${
                          item.id % 2 === 0 ? "self-end" : "self-start"
                        }`}
                      >
                        <video
                          className="h-[150px] -left-2 absolute -z-10"
                          autoPlay
                          muted
                          loop
                        >
                          <source src={bg_ring} type="video/mp4" />
                        </video>
                        <img
                          src={item.img}
                          alt={item.img}
                          className="h-[120px] relative"
                        />
                      </div>

                      <div className="w-full bg-second-primary p-6">
                        <ul className="list-disc">
                          {item.bullets.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-10 h-10 border-t border-r border-white absolute -top-1.5 -right-1.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider-buttons */}
      <div className="w-full flex justify-center items-center lg:-mt-20 lg:mb-10 lg:py-0 py-20 gap-2">
        <img
          src={slider ? next : previous}
          alt={previous}
          className={`w-6 cursor-pointer ${
            slider ? "rotate-180" : "rotate-0"
          } `}
          onClick={() => setSlider(true)}
        />
        <img
          src={slider ? previous : next}
          alt={next}
          className={`w-6 cursor-pointer ${
            slider ? "rotate-180" : "rotate-0"
          } `}
          onClick={() => setSlider(false)}
        />
      </div>
    </>
  );
};

export default Roadmap;
