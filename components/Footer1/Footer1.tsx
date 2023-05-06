import React, { FC } from "react";
import s from "./Footer1.module.scss";
import Image from "next/image";

const Footer1: FC = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.logo}`}>
        <Image
          src="/images/image 2 (Traced).png"
          alt="logo"
          height={51}
          width={192}
        />
      </div>
      <div className={`${s.content}`}>
        <div className={`${s.firstul}`}>
          <ul>
            <li className={`${s.listheading}`}>Contact us</li>
            <li>+971 123 35 54545</li>
            <li>info@emchain.io</li>
            <li>DUBAI,UAE</li>
          </ul>
        </div>
        <div className={`${s.firstul}`}>
          <ul>
            <li className={`${s.listheading}`}>Links</li>
            <li>About</li>
            <li>Partnerships</li>
            <li>+Start a Project</li>
          </ul>
        </div>
        <div className={`${s.firstul}`}>
          <ul>
            <li className={`${s.listheading}`}>Newsletter</li>
            <li>Email Address </li>
            <li>____________________________________________</li>
            <li>
              <i className="fas fa-check" />i agree to all your terms and
              policies
            </li>
          </ul>
        </div>
        <div className={`${s.firstul} ${s.icondiv}`}>
          <ul>
            <li>
              <Image
                src="/images/Twitter.png"
                alt="twitter"
                height={30}
                width={30}
              />
            </li>
            <li>
              <Image
                src="/images/Facebook.png"
                alt="twitter"
                height={30}
                width={30}
              />
            </li>
            <li>
              <Image
                src="/images/Linkedin.png"
                alt="twitter"
                height={30}
                width={30}
              />
            </li>
            <li>
              <Image
                src="/images/Discord.png"
                alt="twitter"
                height={30}
                width={30}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
