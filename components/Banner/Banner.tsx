import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className={`${s.container}`}>
        <div className={`${s.firstcon}`}>
          <div className={`${s.head}`}>
            <div className={`${s.more}`}>
              <Image
                src="/images/Frame 3.png"
                alt="more"
                height={261}
                width={724}
              />
            </div>
          </div>
          <div className={`${s.desc}`}>
            <span className={`${s.help}`}>
              Helping Brands and creators Navigate through the market trends
              faster and efficiently
            </span>
            <p className={`${s.see}`}>
              <a>SEE OUR WORK </a>
              <i className="fas fa-arrow-right"></i>
            </p>
          </div>
        </div>
        <div className={`${s.seccon}`}>
          <p>than Marketing Solutions</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
