import url from "../Mohab_inf/skills.jpeg"
export const Skils = () => {
  return (
    <section id="skills" className="mt-[12rem]">
      <div className="container mx-auto text-center  ">
        <h1
          data-aos="fade-up-left"
          className="hove text-3xl text-white font-bold w-2/3  sm:w-1/4 mx-auto p-3 rounded-full cursor-pointer bg-[#0F172A] border-2 border-b-[#32D3FF]  "
        >
          Skills & Tools
        </h1>
      </div>

      <div className="bg-transtparent mx-auto w-full sm:w-[70%]  text-center mt-12    ">
          <img src={url} alt="" className="h-[300px] sm:h-[400px] mx-auto rounded-xl sm:w-[70%] w-[80%]" />
      </div> 
    </section>
  );
};
