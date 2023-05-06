import React from "react";
import s from "./Info.module.scss";

const Info = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.heading}`}>
        <h1>Lets start your Project with Emchain</h1>
      </div>
      <div className={`${s.wrapper}`}>
        <div className={`${s.infodiv}`}>
          <h3>5 billion +</h3>
          <span className={`${s.desc}`}>Views</span>
        </div>
        <div className={`${s.infodiv}`}>
          <h3>900</h3>
          <span className={`${s.desc}`}>Content Creators</span>
        </div>
        <div className={`${s.infodiv}`}>
          <h3>45</h3>
          <span className={`${s.desc}`}>Organizations</span>
        </div>
        <div className={`${s.infodiv}`}>
          <h3>450 million</h3>
          <span className={`${s.desc}`}>Media Reach</span>
        </div>
      </div>
      <div className={`${s.content}`}>
        <div className={`${s.letscontent}`}>
          {`let's work together just drop me a line`}
        </div>
        <div>info@emchain.io</div>
      </div>
    </div>
  );
};

export default Info;
