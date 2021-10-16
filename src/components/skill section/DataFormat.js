import React from "react";

const DataFormat = ({
  inputSkill,
  displaySkill,
  onSubmitSkill,
  handleSkillChange,
  inputAward,
  displayAward,
  onSubmitAward,
  handleAwardChange,
  inputLanguage,
  displayLanguage,
  onSubmitLanguage,
  handleLanguageChange,
}) => {
  const onSubmitSkillChange = (event) => {
    handleSkillChange(event.target.value);
  };
  const onSubmitAwardChange = (event) => {
    handleAwardChange(event.target.value);
  };
  const onSubmitLanguageChange = (event) => {
    handleLanguageChange(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <h4 className="ui dividing header">Skill Set Section</h4>

        <div className="three fields">
          <div className="field">
            <label>Skills</label>
            <div className="ui icon input">
              <input
                onClick={(event) => {
                  console.log(event.target.name);
                }}
                value={inputSkill}
                onChange={onSubmitSkillChange}
                type="text"
                name="skills"
                placeholder="skill"
              />
              <i
                onClick={onSubmitSkill}
                className="plus green link icon icon-color"
              ></i>
            </div>
            {displaySkill}
          </div>
          <div className="field">
            <label>Awards/Achievements</label>
            <div className="ui icon input">
              <input
                value={inputAward}
                type="text"
                name="awards"
                placeholder="achievements"
                onChange={onSubmitAwardChange}
              />

              <i
                onClick={onSubmitAward}
                className="plus green link icon icon-color"
              ></i>
            </div>
            {displayAward}
          </div>
          <div className="field">
            <label>Languages</label>
            <div className="ui icon input">
              <input
                value={inputLanguage}
                type="text"
                name="languages"
                placeholder="languages"
                onChange={onSubmitLanguageChange}
              />

              <i
                onClick={onSubmitLanguage}
                className="plus green link icon icon-color"
              ></i>
            </div>
            {displayLanguage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataFormat;
