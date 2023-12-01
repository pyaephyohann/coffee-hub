import beans from "../assets/beans.png";
import medal from "../assets/medal.png";
import coffee from "../assets/coffee.png";
import price from "../assets/price.png";

const About = () => {
  return (
    <div className="md:px-12 p-4 my-[3.5rem]">
      {/* text */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Why are we different?
        </h1>
        <p className="text-lg md:text-xl text-tartiary mt-[1rem] font-semibold ">
          We don't just make your coffee, we make your day!
        </p>
      </div>
      {/* cards */}
      <div className="mt-[3rem] flex flex-wrap justify-center items-center md:justify-between">
        <div className="bg-[rgba(255, 255, 255, 0.04)] shadow-3xl px-[1rem] py-[2.5rem] rounded-[35px] hover:-translate-y-6 transition-all duration-300 cursor-pointer m-[1rem]">
          <img className="h-[8rem] mx-auto" src={beans} alt="beans" />
          <h3 className="text-2xl font-bold text-center text-primary">
            Supreme Beans
          </h3>
          <p className="text-lg w-[90%] text-center text-tartiary font-semibold mt-[0.8rem]">
            Beans that provides greate taste
          </p>
        </div>
        <div className="bg-[rgba(255, 255, 255, 0.04)] shadow-3xl px-[1rem] py-[2.5rem] rounded-[35px] hover:-translate-y-6 transition-all duration-300 cursor-pointer m-[1rem]">
          <img className="h-[8rem] mx-auto" src={medal} alt="beans" />
          <h3 className="text-2xl font-bold text-center text-primary mt-[0.5rem]">
            High Quality
          </h3>
          <p className="text-lg w-[90%] text-center text-tartiary font-semibold mt-[0.8rem]">
            We provide the highest quality
          </p>
        </div>
        <div className="bg-[rgba(255, 255, 255, 0.04)] shadow-3xl px-[1rem] py-[2.5rem] rounded-[35px] hover:-translate-y-6 transition-all duration-300 cursor-pointer m-[1rem]">
          <img className="h-[8rem] mx-auto" src={coffee} alt="beans" />
          <h3 className="text-2xl font-bold text-center text-primary mt-[1.5rem]">
            Extraordinary
          </h3>
          <p className="text-lg w-[90%] text-center text-tartiary font-semibold mt-[0.8rem]">
            Coffee like you have never tasted
          </p>
        </div>
        <div className="bg-[rgba(255, 255, 255, 0.04)] shadow-3xl px-[1rem] py-[2.5rem] rounded-[35px] hover:-translate-y-6 transition-all duration-300 cursor-pointer m-[1rem]">
          <img className="h-[8rem] mx-auto" src={price} alt="beans" />
          <h3 className="text-2xl font-bold text-center text-primary mt-[0.5rem]">
            Affordable
          </h3>
          <p className="text-lg w-[90%] text-center text-tartiary font-semibold mt-[0.8rem]">
            Our coffee prices are easy to afford
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
