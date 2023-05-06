import React from "react";
import s from "./Card.module.scss";
import Image from "next/image";

const Card = () => {
  return (
    <div className={`${s.maincontainer}`}>
      <div className={s.container}>
        <div className={`${s.firstdiv}`}>
          <div className={`${s.inner}`}>
            <div className={`${s.icons}`}>
              <Image
                src="/images/Project.svg"
                alt="community"
                height={55.69}
                width={93.75}
                objectFit="contain"
              />
            </div>
          </div>
          <p className={`${s.community}`}>Community</p>
          <span className={`${s.lacus}`}>
            Lacus habitasse sed sagittis leo id amet vitae. Non eget elementum
            mattis risus scelerisque platea in. Vitae ac magna eu rhoncus sed
            duis bibendum velit.
          </span>
        </div>
        <div className={`${s.firstdiv}`}>
          <div className={`${s.inner}`}>
            <div className={`${s.icons}`}>
              <Image
                src="/images/Affability.svg"
                alt="Collaboration"
                height={55.69}
                width={93.75}
                objectFit="contain"
              />
            </div>
          </div>
          <p className={`${s.community}`}>Collaboration</p>
          <span className={`${s.lacus}`}>
            Lacus habitasse sed sagittis leo id amet vitae. Non eget elementum
            mattis risus scelerisque platea in. Vitae ac magna eu rhoncus sed
            duis bibendum velit.
          </span>
        </div>
        <div className={`${s.firstdiv}`}>
          <div className={`${s.inner}`}>
            <div className={`${s.icons}`}>
              <Image
                src="/images/strat.svg"
                alt="community"
                height={55.69}
                width={93.75}
                objectFit="contain"
              />
            </div>
          </div>
          <p className={`${s.community}`}>Stratedgy</p>
          <span className={`${s.lacus}`}>
            Lacus habitasse sed sagittis leo id amet vitae. Non eget elementum
            mattis risus scelerisque platea in. Vitae ac magna eu rhoncus sed
            duis bibendum velit.
          </span>
        </div>
        <div className={`${s.firstdiv}`}>
          <div className={`${s.inner}`}>
            <div className={`${s.icons}`}>
              <Image
                src="/images/Rocket.svg"
                alt="community"
                height={55.69}
                width={93.75}
                objectFit="contain"
              />
            </div>
          </div>
          <p className={`${s.community}`}>Growth</p>
          <span className={`${s.lacus}`}>
            Lacus habitasse sed sagittis leo id amet vitae. Non eget elementum
            mattis risus scelerisque platea in. Vitae ac magna eu rhoncus sed
            duis bibendum velit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
