import React, { useState } from "react";
import SkillStorage from "./SkillStorage";

const Achievement = () => {
  const [data, setData] = useState({
    skills: [],
    achievements: [],
    languages: [],
  });

  const { skills, achievements, languages } = data;

  const handleKeyPress = (event) => {
    const {
      key,
      target: { value, name },
    } = event;

    if (key === "Enter" && name === "skills") {
      setData({ ...data, ...skills.push(value) });
    } else if (key === "Enter" && name === "achievements") {
      setData({ ...data, ...achievements.push(value) });
    } else if (key === "Enter" && name === "languages") {
      setData({ ...data, ...languages.push(value) });
    }
  };

  return (
    <div class="ui form">
      <h4 className="ui dividing header">Skill Set Section</h4>
      <div class="three fields">
        <div class="field">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            placeholder="skill"
            onKeyPress={handleKeyPress}
          />
          <SkillStorage data={data} />
        </div>
        <div class="field">
          <label>Awards/Achievements</label>
          <input
            type="text"
            name="achievements"
            placeholder="achievements"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div class="field">
          <label>Languages</label>
          <input
            name="languages"
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="languages use"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
