import Marquee from "react-fast-marquee";
import { todaySpecialDatas } from "../datas";

const TodaySpecials = () => {
  return (
    <div className="px-[1rem] lg:px-[4rem] my-[3.5rem]">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-[3rem]">
        Today's Specials
      </h1>
      <Marquee
        gradient={false}
        speed={60}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {todaySpecialDatas.map((item, index) => {
          return (
            <div className="m-[1rem]" key={index}>
              <img
                className="rounded-lg h-[10rem] lg:h-[15rem]"
                src={item.src}
                alt={item.name}
              />
              <h3 className="text-xl font-bold text-center mt-[1rem]">
                {item.name}
              </h3>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default TodaySpecials;
