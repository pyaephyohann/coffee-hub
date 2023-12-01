import coffeetaking from "../assets/coffeetaking.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="mt-[7rem] md:px-12 p-4" id="home">
      <div className="gradientBg p-[2.3rem] rounded-xl rounded-br-[5rem] flex flex-col md:flex-row-reverse items-center">
        {/* Banner Image */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%] mb-[2rem] md:mb[0]"
        >
          <img src={coffeetaking} alt="coffeetaking" />
        </motion.div>
        {/* Banner Content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-[50%]"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-primary">
            We've got your morning covered with Coffee
          </h1>
          <p className="text-lg md:text-xl text-tartiary font-semibold my-[1.5rem]">
            It's best to start your day with a cup of coffee.Discover the best
            flavours coffee you will ever have.We provide the best for our
            customers.
          </p>
          <div className="space-x-8">
            <button className="button">Get Started</button>
            <button className="button">Discount</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
