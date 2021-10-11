import React, { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import DisplayCV from "./components/DisplayCV";
import "./App.css";

const App = () => {
  const [generalInfo, getGeneralInfo] = useState({});
  const [beClick, setBeClick] = useState(true);

  const onGeneralSubmit = (info) => {
    getGeneralInfo(info);
  };

  console.log(beClick);

  return (
    <div className="app">
      <h1 className="main-title">CV MAKER</h1>
      <div className="btn">
        <button onClick={() => setBeClick(true)} className="btn-create">
          Create
        </button>
        <button onClick={() => setBeClick(false)} className="btn-preview">
          Preview
        </button>
      </div>
      {beClick === true ? (
        <div>
          <GeneralInformation onSubmit={onGeneralSubmit} />
          <br />
          <br />
          <GeneralInformation onSubmit={onGeneralSubmit} />
          <br />
          <br />
          <GeneralInformation onSubmit={onGeneralSubmit} />
        </div>
      ) : (
        <DisplayCV onDisplay={generalInfo} />
      )}
    </div>
  );
};

export default App;
