import React from "react";

const SkillStorage = ({ data }) => {
  const skillDataReceived = data.skills.map((skill, index) => {
    return (
      <div key={index} className="ui middle aligned divided list">
        <div className="item">
          <div className="right floated content">
            <div className="ui mini button">Delete</div>
          </div>
          <div className="ui dividing header">
            <div className="content">{skill}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {data.skills.length === 0 ? null : (
        <div className="ui form">
          <div className="ui segment">{skillDataReceived}</div>
          <button type="submit">Submit</button>
        </div>
      )}
    </div>
  );
};

export default SkillStorage;
