import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:flex items-center justify-between md:px-12 p-4 py-[2rem] bg-primary text-white">
      <div className="text-center">
        <p className="text-xl font-bold">@Coffee Hub. All rights reserved.</p>
      </div>
      <div className="flex space-x-6 mt-[1.8rem] md:mt-0 justify-center">
        <a href="/">
          <FaFacebook className="text-4xl text-[#0866FF]" />
        </a>
        <a href="/">
          <FaInstagram className="text-4xl text-[#833AB4]" />
        </a>
        <a href="/">
          <FaGithub className="text-4xl" />
        </a>
        <a href="/">
          <FaLinkedin className="text-4xl text-[#0A66C2]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
