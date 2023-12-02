import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:flex items-center justify-between md:px-12 p-4 py-[2rem] bg-primary text-white">
      <div className="text-center">
        <p className="text-lg md:text-xl font-bold">
          @Coffee Hub. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-6 mt-[1.8rem] md:mt-0 justify-center">
        <a href="https://www.facebook.com/profile.php?id=100048688099795">
          <FaFacebook className="text-4xl" />
        </a>
        <a href="https://www.instagram.com/pyaephyohan0807">
          <FaInstagram className="text-4xl" />
        </a>
        <a href="https://github.com/pyaephyohann">
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://www.linkedin.com/in/pyae-phyo-han-65aab2264/">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
