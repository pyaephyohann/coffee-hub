import morning from "../assets/morning.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Features = () => {
  return (
    <div className="md:px-12 p-4" id="features">
      {/* left side */}
      <div className="md:flex items-center">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%]"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Discover the best coffee
          </h1>
          <p className="text-lg md:text-xl font-semibold text-tartiary my-[1.5rem] md:my-[2rem]">
            Coffee Hub is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood.Having
            a cup of coffee is good, but having a cup of real coffee
            greater.There is no doubt that you will enjoy this coffee more that
            others you have ever tasted.
          </p>
          <button className="button">Learn More</button>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%] mt-[2.5rem] md:mt-0"
        >
          <img
            className="h-[20rem] mx-auto rounded-xl"
            src="https://i.pinimg.com/564x/22/5f/cc/225fccc9400c7040b66cf5796377f2cb.jpg"
            alt="coffee"
          />
        </motion.div>
      </div>
      {/* right side */}
      <div className="mt-[4rem] md:flex items-center">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%]"
        >
          <img src={morning} alt="morning" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%] mt-[2.5rem] md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Get a chance to have an Amazing morning
          </h1>
          <p className="text-lg md:text-xl font-semibold my-[1.5rem] text-tartiary">
            We are giving you one time opportunity to experience a better life
            with coffee
          </p>
          <button className="button">Order Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
