import FC from "react";
import s from "./Navbar.module.scss";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.firstul}`}>
        <ul>
          <li className={`${s.logoicon}`}>
            <Image
              src="/images/image 2 (Traced).png"
              alt="logo"
              height={30}
              width={110}
            />
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>PARTNERSHIPS</a>
          </li>
        </ul>
      </div>

      <div className={`${s.secondul}`}>
        <ul>
          <li>
            <a>CALL ANYTIME +971 123 4567 891</a>
          </li>
          <li>
            <button className={`${s.btn}`}>+START A PROJECT</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
