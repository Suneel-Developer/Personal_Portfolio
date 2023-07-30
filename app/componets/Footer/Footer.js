import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer section">
      <div data-aos="fade-right" data-aos-duration = "2000" className="contactdetails flex">
        <div className="phone">
          <span>CAll</span>
          <p>+923410039529</p>
        </div>
        <div className="email">
          <span>EMAIL</span>
          <p>suneeldeveloper11@gmail.com</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration = "2500" className="socialLinks flex">
        <span>On time everytime</span>
        <div className="links">
          <Link href="https://github.com/Suneel-Developer" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/suneel-kumar-862bb5252/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.fiverr.com/suneeldeveloper?up_rollout=true"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div  className="thanksBox flex">
        <span>Thanks</span>
        <AiFillHeart />
      </div>
    </div>
  );
};

export default Footer;