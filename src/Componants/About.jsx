import Lottie from "lottie-react";
import image from "../assets/Animation - 1723407375107.json";

export const About = () => {
  return (
    <section
      id="about"
      className="container  items-center flex sm:justify-around my-y mt-[10rem] flex-col-reverse sm:flex-row font-mono"
    >
      <div
        className="sm:w-2/6 w-5/6 h-[70%]  rounded-lg items-center mt-7 animation-border "
        data-aos="fade-right"
      >
        <Lottie
          animationData={image}
          loop={true}
          className="sm:w-[400px]  mx-auto mt-8   "
        />
      </div>

      <div className="text-white sm:w-[40%] w-[90%] -mt-10">
        <div className=" items-center text-center">
          <h1
            data-aos="fade-down-left"
            className=" hove text-2xl border-2 bg-[32D3FF] bg-slate-900 text-[#32D3FF] p-1 border-r-[#32D3FF] border-b-[#32D3FF] rounded-lg hover:bg-[#32D3FF] hover:text-white"
          >
            About ME
          </h1>
        </div>

        <div className="mt-6 text-white ">
          <p data-aos="fade-up-left" className="text-lg">
            Being highly motivated, adaptable, innovative, and a person with
            Leadership skills, I seek to utilize my skills by working for a
            leading organization where I can gain practical and professional
            experience.
          </p>
          <p className="text-lg" data-aos="fade-up-left">
            I&apos;m always eager to learn new technologies and take on
            challenging projects that allow me to grow both personally and
            professionally.
          </p>
        </div>
      </div>
    </section>
  );
};
