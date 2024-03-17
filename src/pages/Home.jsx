import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import {
  banner,
  feature_bg,
  footer_nft,
  frame,
  frameHover,
  frame_left_support,
  frame_right_support,
  hero_bg,
  separator,
} from "../assets";
import { accordion, faqsTabs, features, nftsGallery } from "../constants";
import Roadmap from "../components/Roadmap";
import Accordion from "../components/Accordion";

const Home = () => {
  const navigate = useNavigate();
  const [hoverStates, setHoverStates] = useState({});
  const [tab, setTab] = useState("General");

  console.log(tab)
  const handleMouseEnter = (itemId) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [itemId]: true,
    }));
  };

  const handleMouseLeave = (itemId) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [itemId]: false,
    }));
  };

  return (
    <div className="w-full">
      {/* Hero ection */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full -z-10"
          autoPlay
          muted
          loop
        >
          <source src={hero_bg} type="video/mp4" />
        </video>
        <div className="relative w-full h-screen bg-hero flex flex-col justify-center gap-5 lg:px-20 md:px-10 px-6">
          <h1 className="w-full flex flex-col global-heading">
            <span>Generate with AI,</span>
            <span>Scan, Mint, Sell</span>
            <span>& Trade</span>
          </h1>
          <p className="md:w-2/5 w-full global-paragraph font-inter font-light">
            Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes
            life into NFTs
          </p>
          <Button
            onClick={() => navigate("/buy-nft")}
            text="Buy NFT'S"
            className="lg:text-lg sm:text-base text-sm text-nowrap w-fit !py-3 !px-12 font-semibold"
          />
        </div>
      </div>

      {/* separator */}
      <img src={separator} alt={separator} className="w-full" />

      {/* Our Vision */}
      <div className="w-full bg-vision bg-center bg-cover h-full relative">
        <div className="w-full h-full py-20 bg-black/60 lg:px-20 md:px-10 px-6 flex justify-center flex-col items-center lg:gap-8 gap-4">
          <h2 className="global-heading">Our Vision</h2>
          <p className="text-center md:w-4/5 w-full global-paragraph ">
            The vision of 3dotlink is to be a transformative force at the
            intersection of culture, art, and technology within the Web3
            landscape. We envision a digital realm where the rich tapestry of
            cultural traditions, especially the intricate artistry of masks from
            diverse ethnic groups, is seamlessly woven into the fabric of the
            digital age. Our vision extends far beyond mere NFTs; it's about the
            preservation and celebration of cultural heritage in a dynamic,
            ever-evolving digital space. We strive to empower artists and
            creators, offering them a unique canvas to bring their cultural art
            to life while harnessing the capabilities of AI technology. We see
            3dotlink as a bridge between the past and the future, where ancient
            rituals and modern innovation converge, enriching our collective
            human experience and fostering a global community united by a shared
            appreciation for the art, history, and culture that defines us. In
            essence, our vision is to unlock the immense potential of cultural
            art within Web3, inviting the world to explore, create, and treasure
            the beauty of diverse traditions through the digital realm.
          </p>

          <Button
            text="Read More"
            className="lg:text-lg sm:text-base text-sm text-nowrap xl:mt-28 lg:mt-20 md:mt-10"
          />
        </div>
      </div>

      {/* Banner */}
      {/* <img src={banner} alt={banner} className="w-full h-full" /> */}
      <video className="w-full overflow-hidden" autoPlay muted loop>
        <source src={banner} type="video/mp4" />
      </video>

      {/* Features */}
      <div className="w-full h-full relative">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
        >
          <source src={feature_bg} type="video/mp4" />
        </video>

        <div className="w-full h-full py-20 bg-black/80 relative lg:px-20 md:px-10 px-6 flex justify-center flex-col items-center gap-8">
          {/* edges-shades */}
          <>
            <div className="absolute w-full h-[250px] top-0 bg-gradient-to-b from-secondary to-transparent"></div>
            <div className="absolute w-full h-[250px] bottom-0 bg-gradient-to-t from-secondary to-transparent"></div>
          </>

          <div className="flex relative items-center justify-center w-full flex-wrap gap-10 lg:p-20 md:p-10">
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 "> */}
            {features.map((item) => (
              <div
                key={item.id}
                className="relative xl:w-[300px] xl:h-[300px] lg:w-[240px] lg:h-[240px] w-[260px] h-[260px]"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <div
                  className={`absolute flex items-center justify-center transition-all duration-700 ${
                    hoverStates[item.id] ? "rotate-[180deg]" : "rotate-0"
                  }`}
                >
                  <img
                    src={frame_left_support}
                    alt={frame_left_support}
                    className="xl:h-[185px] sm:h-[155px] h-[160px] -rotate-1 xl:-mr-2 -mr-1"
                  />
                  <img
                    src={frameHover}
                    alt={frameHover}
                    className={`transition duration-500 ease-in-out ${
                      hoverStates[item.id]
                        ? "opacity-100 w-full h-full"
                        : "opacity-0 w-0 h-0 "
                    }`}
                  />
                  <img
                    src={frame}
                    alt={frame}
                    className={` transition duration-500 ${
                      !hoverStates[item.id] ? "w-full h-full" : "w-0 h-0"
                    }`}
                  />

                  <img
                    src={frame_right_support}
                    alt={frame_right_support}
                    className="xl:h-[185px] sm:h-[155px] h-[160px] rotate-1 xl:-ml-2 -ml-1"
                  />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center relative gap-4">
                  <div className="relative h-1/3">
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className={`h-full ${
                        hoverStates[item.id] ? "opacity-0" : "opacity-100"
                      } absolute`}
                    />
                    <img
                      src={item.hover}
                      alt={item.hover}
                      className={`h-full transition duration-500 ${
                        !hoverStates[item.id] ? "opacity-0" : "opacity-100"
                      } `}
                    />
                  </div>
                  <span className="w-1/2 opacity-80 text-center font-inter">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* NFT's Gallery */}
      <div className="w-full md:px-10 px-6 py-10 flex flex-col items-center gap-3 relative">
        <h2 className="font-zen-dots lg:text-4xl md:text-3xl text-2xl text-center">
          Popular NFT’s generated by Artists
        </h2>

        <p className="global-paragraph md:w-4/5 w-full text-center">
          3dotlink's AI integration is a game-changer in the NFT art world. It
          offers a powerful canvas for artists to redefine art creation and
          innovation while preserving cultural art in an entirely new format.
          With this platform, the convergence of human ingenuity and AI
          technology is set to redefine the boundaries of artistic expression
          and creative possibilities, ushering in a digital art renaissance.
        </p>

        <div className="md:w-4/5 w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-6 lg:gap-4 md:gap-3 gap-2 mt-10">
          {nftsGallery.map((nft) => (
            <div key={nft.id} className={`${nft.className} image-hover group`}>
              <img
                key={nft.id}
                src={nft.image}
                alt={nft.image}
                className="w-full h-full rounded-md"
              />
              <div className="absolute bottom-6 left-6 flex flex-col z-30 opacity-0 group-hover:opacity-100 transition duration-700">
                <h2 className="lg:text-2xl xl:text-xl sm:text-lg text-sm font-zen-dots font-medium text-white">
                  {nft.title}
                </h2>
                <p className="global-paragraph sm:text-sm text-xs">
                  Art by{" "}
                  <span className="text-second-primary">{nft.designer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-32 h-52 bg-second-primary blur-[120px] absolute -z-10 -bottom-10 md:left-[350px] left-[130px]" />
        <div className="w-32 h-32 bg-second-primary blur-[100px] absolute -z-10 top-1/2 md:left-[60%] left-10" />
      </div>

      {/* Roadmap */}
      <Roadmap />

      {/* FAQs */}
      <div className="w-full xl:h-[800px] lg:h-[700px] h-full flex lg:flex-row flex-col bg-footer bg-contain bg-no-repeat bg-right-bottom lg:px-20 md:px-10 px-6 overflow-hidden">
        <div className="lg:w-1/2 md:w-3/5 w-full p-5">
          <h2 className="font-zen-dots lg:text-4xl md:text-3xl text-2xl">
            Have any question?
          </h2>

          <p className="global-paragraph">
            Curious about 3dotlink? Explore our frequently asked questions to
            find answers
          </p>

          <ul className="flex font-zen-dots md:text-lg overflow-x-auto overflow-y-hidden text-sm border-b border-gray-400 gap-6 justify-between">
            {faqsTabs.map((item) => (
              <li
                key={item.id}
                className="py-4 text-nowrap relative cursor-pointer"
                onClick={() => setTab(item.label)}
              >
                <span>{item.label}</span>
                <div
                  className={`h-1 w-full rounded-sm bg-second-primary ${
                    tab === item.label ? "opacity-100" : "opacity-0"
                  } transition duration-200 z-10 absolute -bottom-0.5`}
                />
              </li>
            ))}
          </ul>

          <div className="w-full">
            {accordion.map((item) => (
              <div
                className={`w-full transition-all duration-300 ${
                  item.title === tab
                    ? "opacity-100 pointer-events-auto h-full"
                    : "opacity-0 pointer-events-none h-0"
                }`}
                key={item.id}
              >
                <Accordion faqs={item.faqs} />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 md:w-2/5 w-full self-end lg:pl-10">
          <img src={footer_nft} alt={footer_nft} className="lg:w-full w-4/5" />
        </div>
      </div>

      {/* <div className="py-20"></div> */}
    </div>
  );
};

export default Home;
