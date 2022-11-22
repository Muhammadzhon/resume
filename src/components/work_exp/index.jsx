import React from "react";
import { RiBriefcase4Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import s from "./work_exp.module.css";

const Work_exp = ({ experience }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.title_logo}>
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "30",
              style: { verticalAlign: "top" },
            }}
          >
            <RiBriefcase4Fill />
          </IconContext.Provider>
        </div>
        <div className={s.title_name}>WORK EXPERIENCE</div>
      </div>

      <div className={s.options}>
        {experience.map((objs, idx) => (
          <div key={idx}>
            <h1 className={s.postion}>{objs.position}</h1>
            <h2 className={s.company_name}>{objs.company_n}</h2>
            <div className={s.location_time}>
              <div className={s.work_period}>{objs.work_period}</div>
              <div className={s.location}>{objs.location}</div>
            </div>
            <div className={s.dutys}>
              {objs.duties.map((ele, index) => (
                <div className={s.duty} key={index}>
                  * {ele}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work_exp;