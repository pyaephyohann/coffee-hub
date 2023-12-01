import coffeetaking from "../assets/coffeetaking.png";

const Home = () => {
  return (
    <div className="mt-[7rem] md:px-12 p-4">
      <div className="gradientBg p-[2.3rem] rounded-xl rounded-br-[5rem] flex flex-col md:flex-row-reverse items-center">
        {/* Banner Image */}
        <div className="md:w-[50%] mb-[2rem] md:mb[0]">
          <img src={coffeetaking} alt="coffeetaking" />
        </div>
        {/* Banner Content */}
        <div className="md:w-[50%]">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
