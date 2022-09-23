import {React} from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

//Function for footer
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start footer">
        <div className="text-center p-2">
          <a className="text-dark text-decoration-none ">
            2022 Copyright: Yash.com
            <AiFillTwitterCircle className="ms-4"/>
            <AiFillFacebook className="ms-2"/>
            <FaInstagramSquare className="ms-2"/>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
