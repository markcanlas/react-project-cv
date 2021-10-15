import React from "react";

const DataFormat = ({
  displaySkill,
  displayAward,
  displayLanguage,
  onSubmitSkill,
  onSubmitAward,
  onSubmitLanguage,
  handleChange,
  inputText,
  setInputText,
}) => {
  const onSubmitChange = (event) => {
    handleChange(event.target.value);
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
                value={inputText}
                onChange={onSubmitChange}
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
                value={inputText}
                type="text"
                name="awards"
                placeholder="achievements"
                onChange={onSubmitChange}
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
                value={inputText}
                type="text"
                name="languages"
                placeholder="languages"
                onChange={onSubmitChange}
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
