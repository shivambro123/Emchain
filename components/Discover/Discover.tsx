import React, { FC } from "react";
import s from "./Discover.module.scss";
import Image from "next/image";

const Discover: FC = () => {
  return (
    <div className={`${s.maincontainer}`}>
      <div className={`${s.innermaindiv}`}>
        <div className={`${s.container}`}>
          <span className={`${s.get}`}>GET TO KNOW US</span>
          <h1>Why use Emchain</h1>
        </div>
        <div className={`${s.wrapper}`}>
          <div className={`${s.imgwrapper}`}>
            <Image
              src="/images/image.png"
              alt="discover"
              height={520}
              width={666}
            />
          </div>
          <div className={`${s.contentdiv}`}>
            <div className={`${s.innercontent}`}>
              <p>
                {` The team at emchain is a group of dedicated, experienced professionals who’ve witnessed the trends and bends of the industry. They utilise their expertise while placing the needs of their clients first, offering them practical advice and answers in the form of useful tools and strategies.`}
              </p>
            </div>
            <div className={`${s.statement}`}>
              <ul>
                <li>
                  <i
                    className={`fas fa-check 
                 ${s.check}`}
                  />
                  Develop a vision statement
                </li>
                <li>
                  <i
                    className={`fas fa-check 
                 ${s.check}`}
                  />
                  Increase your monthly sales
                </li>
                <li>
                  <i
                    className={`fas fa-check 
                 ${s.check}`}
                  />
                  Grow your customer base
                </li>
                <li>
                  <i
                    className={`fas fa-check 
                 ${s.check}`}
                  />
                  Beat your competition
                </li>
              </ul>
            </div>
            <button className={`${s.btn}`}>DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
