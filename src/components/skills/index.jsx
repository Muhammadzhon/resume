import React from "react";
import { IconContext } from "react-icons";
import { IoIosColorPalette } from "react-icons/io";
import s from "./skills.module.css";

const skill_sets = [
    ' Advanced communication skills ',
    ' Fluent in English, Russian and Turkish ',
    ' Good team work ',
    ' Good analitical skills ',
    ' Self orgonized ',
    ' Excelent customer service skills '
];

const Skills = () => {
  return (
    <div className={s.skills_container}>
      <div className={s.title}>
        <div className={s.title_logo}>
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "30",
              style: { verticalAlign: "top" },
            }}
          >
            <IoIosColorPalette />
          </IconContext.Provider>
        </div>
        <div className={s.title_name}>SKILLS</div>
      </div>
      <div className={s.options}>
        {skill_sets.map((item, idx) => <div key={`${idx}-${item}`} className={s.features}>{item}</div>)}
      </div>
    </div>
  );
};

export default Skills;
