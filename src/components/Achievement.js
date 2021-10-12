import React, { useState } from "react";

const Achievement = () => {
  const dataInfo = {
    skills: [],
    achievements: [],
    languages: [],
  };
  const [data, setData] = useState(dataInfo);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.name === "skills") {
      setData({ ...data, ...data.skills.push(event.target.value) });
    } else if (event.key === "Enter" && event.target.name === "achievements") {
      setData({ ...data, ...data.achievements.push(event.target.value) });
    } else if (event.key === "Enter" && event.target.name === "languages") {
      setData({ ...data, ...data.languages.push(event.target.value) });
    }
    // setData((dataInfo = { skills: [], achievements: [], languages: [] }));
  };

  console.log(data);
  console.log(data.languages[0]);

  // const onSubmitInfo = (event) => {
  //   event.preventDefault();
  //   onSubmit(info);
  //   setInfo(data);
  // };

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
          <div className="ui segment">
            <div className="ui  middle aligned divided list">
              <div className="item">
                <div className="right floated content">
                  <div className="ui mini button">Delete</div>
                </div>
                <div className="ui dividing header">
                  <div className="content">{data.skills[0]}</div>
                </div>
              </div>
            </div>
            <div className="ui middle aligned divided list">
              <div className="item">
                <div className="right floated content">
                  <div className="ui mini button">Delete</div>
                </div>
                <div className="ui dividing  header">
                  <div className="content">{data.skills[1]}</div>
                </div>
              </div>
            </div>
          </div>
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
