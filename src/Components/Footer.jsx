import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <Link href="/">
          <Image
            className="logo"
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <p className="text">© Fiverr International Ltd. 2023</p>
      </div>
      <div className="right">
        <Link href="#">
          <FaFacebook />
        </Link>
        <Link href="#">
          <FaTwitter />
        </Link>
        <Link href="#">
          {" "}
          <FaInstagram />
        </Link>
        <Link href="#">
          {" "}
          <FaGithub />
        </Link>
        <Link href="#">
          <FaLinkedinIn />
        </Link>
        <Link href="#">
          {" "}
          <FaYoutube />
        </Link>
        <Link href="#">
          {" "}
          <FaReact />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
