import React, { useState } from "react";
import GeneralInformation from "./components/general info section/GeneralInformation";
import EducationalExperience from "./components/education section/EducationalExperience";
import PracticalExperience from "./components/experience section/PracticalExperience";
import Achievement from "./components/skill section/Achievement";
import DisplayCV from "./components/display section/DisplayCV";
import "./App.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [beClick, setBeClick] = useState(true);
  const [skillItem, setSkillItem] = useState([]);
  const [awardItem, setAwardItem] = useState([]);
  const [languageItem, setLanguageItem] = useState([]);

  const onGeneralSubmit = (info) => {
    setGeneralInfo(info);
  };

  return (
    <div className="app">
      <h1 className="main-title">CV MAKER</h1>
      <div className="ui buttons btn">
        <button onClick={() => setBeClick(true)} className="btn-create ">
          Create
        </button>
        <div className="or"></div>
        <button onClick={() => setBeClick(false)} className="btn-preview">
          Preview
        </button>
      </div>

      {beClick === true ? (
        <div>
          <GeneralInformation onGeneralSubmit={onGeneralSubmit} />
          <br />
          <br />
          <Achievement
            skillItem={skillItem}
            setSkillItem={setSkillItem}
            awardItem={awardItem}
            setAwardItem={setAwardItem}
            languageItem={languageItem}
            setLanguageItem={setLanguageItem}
          />
          <br />
          <br />
          <GeneralInformation onGeneralSubmit={onGeneralSubmit} />
        </div>
      ) : (
        <DisplayCV
          onDisplay={generalInfo}
          onDisplaySkill={skillItem}
          onDisplayAward={awardItem}
          onDisplayLanguage={languageItem}
        />
      )}
    </div>
  );
};

export default App;
