import React from "react";
import image_1 from "../assets/FirstImage.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import video from "../assets/video.mov";
import Labimage from "../assets/Labimg.jpg";
// import Equipimage from "../assets/2ndimg.jpg";
import Electroplatingimg from '../assets/electroplatingimg.jpg';
import { TypeAnimation } from "react-type-animation";
import img1 from "../assets/basf.jpg";
import img2 from "../assets/hc-iso.jpeg";
import img3 from "../assets/jas-naz.jpg";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      x: "-50%",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const Cards = [
    {
      id: 1,
      name: "ElectroPlating Chemicals:",
      ankerLink: "/Electroplating",
      image: Electroplatingimg,
      desc: "If anything made of matter is made up of chemicals, which means that only phenomena that aren't made of matter are not chemicals: Energy is not a chemical.",
    },
    {
      id: 2,
      name: "ElectroPlating Equipments:",
      ankerLink: "/Equipments",
      // image: Equipimage,
      desc: "We have in-house electroplating plants, providing all types of metal finishing services.",
    },
    {
      id: 3,
      name: "Lab Analysis:",
      ankerLink: "/Lab",
      image: Labimage,
      desc: "We provide, complete lab facilities, analysis and testing of your electroplating systems and metal finishing procedures.",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row justify-end md:justify-center items-center text-black bg-[#fffaf5]">
        <div className="w-full flex flex-col justify-center items-center min-h-[40vh] md:min-h-[70vh]">
          <div className="w-[60%] pt-32 md:pt-0 text-center">
            <h1 className="text-3xl md:mt-0 sm:text-4xl md:text-5xl font-medium">
              <TypeAnimation
                sequence={["Prime Chemicals", 100, "", 100]}
                wrapper="span"
                speed={2}
                backSpeed={2}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                cursor={true}
                deleteSpeed={50}
                smartBackspace={true}
              />
            </h1>

            <h3 className="text-xl sm:text-xl md:text-2xl font-lighter">
              A Sign Of Quality
            </h3>
          </div>

          <div className="w-full px-3 max-w-3xl text-center">
            <p className=" sm:text-lg md:text-xl">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ab numquam molestias at, deleniti maxime assumenda
                enim vero perferendis veritatis incidunt similique ad quasi
                corrupti repudiandae nemo eius earum quo. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Obcaecati, ab numquam
                molestias at, deleniti maxime assumenda enim vero perferendis
                veritatis incidunt similique ad quasi corrupti repudiandae nemo
                eius earum quo.
              </i>
            </p>
          </div>
        </div>

        <div className="w-full md:w-[50%] min-h-[50vh] md:min-h-screen">
          <div className="flex items-center justify-center w-full h-full mt-28 md:mt-20 lg:mt-10 p-4 md:p-0">
            <img
              src={image_1}
              alt="Image"
              className="w-[80%] md:w-[75%] mt-6 md:mt-40 lg:mt-28 md:h-[70%] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-black/10 to-transparent h-[2px]" />

      <div className="w-full h-[70px] my-3 md:my-12 overflow-hidden">
        <span
          ref={textRef}
          className="text-5xl md:text-6xl inline-block whitespace-nowrap"
        >
          A Sign Of Quality, A Sign Of Quality, A Sign Of Quality, A Sign Of
          Quality, A Sign Of Quality, A Sign Of Quality, A Sign Of Quality, A
          Sign Of Quality, A Sign Of Quality, A Sign Of Quality, A Sign Of
          Quality, A Sign Of Quality, A Sign Of Quality, A Sign Of Quality, A
          Sign Of Quality, A Sign Of Quality,
        </span>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-black/10 to-transparent h-[2px]" />

      <div className="w-full text-center py-10">
        <div className="w-full h-[30px]">
          <h1 className="sm:text-4xl font-bold sm:font-normal text-lg">
            ElectroPlating Chemicals Manfacturer and Distributor
          </h1>
        </div>
        <div className="w-full flex justify-center items-center h-[50px] mt-14 italic pt-10">
          <div className="w-[300px] duration-500 hover:scale-105 hover:shadow-xl transition-all h-[50px] flex justify-center items-center border-[1px] border-black rounded-full">
            <h1 className="sm:text-4xl font-bold sm:font-normal text-lg">
              Our Expertise
            </h1>
          </div>
        </div>
        <div className="w-full place-items-center grid grid-cols-1 md:grid-cols-3 gap-4 p-5 my-14">
          {Cards.map(({ id, name, desc, ankerLink, image }) => {
            return (
              <div
                key={id}
                style={{ backgroundImage: `url(${image})` }}
                className="group w-full bg-cover bg-center overflow-hidden flex-row items-center jus md:w-[80%] h-[280px] shadow-xl cursor-pointer hover:scale-105 duration-500 transition-all rounded-lg bg-[#efdfd1] relative"
              >
                <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <div className="h-[160px]">
                    <h1 className="text-2xl text-left pl-2 pt-4 text-white">
                      <i>
                        <b>{name}</b>
                      </i>
                    </h1>
                    <h3 className="text-md text-left pl-2 pt-2 text-white">
                      {desc}
                    </h3>
                  </div>
                  <div className="flex relative justify-center w-full h-[100px] items-center">
                    <a href={ankerLink}>
                      <button className="border border-white absolute bottom-0 right-6 bg-transparent text-white hover:scale-105 transition-all px-4 py-1 rounded-full hover:bg-white/20">
                        View More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-black/10 to-transparent h-[2px]" />

      <div className="w-full my-3 md:my-5 sm:my-10 p-4 flex flex-col justify-center items-center text-center">
        <h1 className="sm:text-4xl font-bold sm:font-normal text-lg">
          We help customers to increase quality and profitability in their metal
          finishing business
        </h1>
      </div>

      <div className="w-full mb-6 p-4 relative flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[600px] md:sticky md:top-0">
          <div className="w-full h-full p-4">
            <video
              src={video}
              controls
              className="w-full max-w-[632px] h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="md:w-[50%] mt-4 md:mt-0 rounded-xl w-full p-4 h-[600px] flex flex-col justify-center items-center">
          <h1 className="px-2 w-[180px] py-3 text-center my-3 hover:scale-105  transition-all shadow-lg bg-opacity-50 hover:bg-green-500 bg-green-500 rounded-full">
            We Are Certified
          </h1>
          <div className="w-full h-[500px] relative rounded-xl bg-zinc-300">
            <img
              src={img1}
              alt="Image"
              className="w-[150px] h-[150px] rounded-xl absolute top-4 left-4"
            />
            <img
              src={img2}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={img3}
              alt=""
              className="w-[150px] h-[150px] rounded-xl absolute bottom-4 right-4"
            />
          </div>
        </div>
      </div>
      <hr className="w-full border-0 bg-gradient-to-r from-transparent via-black/10 to-transparent h-[2px]" />

    </>
  );
};

export default Home;
