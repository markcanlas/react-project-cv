import React, { useState } from "react";
import SkillStorage from "./SkillStorage";
import DataFormat from "./DataFormat";
import AwardsStorage from "./AwardStorage";
import LanguageStorage from "./LanguageStorage";
import "./Achievement.css";

const Achievement = ({
  skillItem,
  setSkillItem,
  awardItem,
  setAwardItem,
  languageItem,
  setLanguageItem,
}) => {
  const [inputSkill, setInputSkill] = useState("");
  const [inputAward, setInputAward] = useState("");
  const [inputLanguage, setInputLanguage] = useState("");

  const handleSkillChange = (value) => {
    setInputSkill(value);
  };
  const handleAwardChange = (value) => {
    setInputAward(value);
  };
  const handleLanguageChange = (value) => {
    setInputLanguage(value);
  };

  const onSubmitSkill = (event) => {
    event.preventDefault();
    setSkillItem([
      ...skillItem,
      { skills: inputSkill, id: Math.random() * 1000 },
    ]);
    setInputSkill("");
  };

  const onSubmitAward = (event) => {
    event.preventDefault();
    setAwardItem([
      ...awardItem,
      { awards: inputAward, id: Math.random() * 1000 },
    ]);
    setInputAward("");
  };

  const onSubmitLanguage = (event) => {
    event.preventDefault();
    setLanguageItem([
      ...languageItem,
      { languages: inputLanguage, id: Math.random() * 1000 },
    ]);
    setInputLanguage("");
  };

  const displaySkill = skillItem.map((skill) => (
    <div key={skill.id}>
      <SkillStorage
        skillItem={skillItem}
        setSkillItem={setSkillItem}
        skill={skill}
        text={skill.skills}
      />
    </div>
  ));

  const displayAward = awardItem.map((award) => (
    <div key={award.id}>
      <AwardsStorage
        awardItem={awardItem}
        setAwardItem={setAwardItem}
        award={award}
        text={award.awards}
      />
    </div>
  ));

  const displayLanguage = languageItem.map((language) => (
    <div key={language.id}>
      <LanguageStorage
        languageItem={languageItem}
        setLanguageItem={setLanguageItem}
        language={language}
        text={language.languages}
      />
    </div>
  ));

  return (
    <DataFormat
      inputSkill={inputSkill}
      displaySkill={displaySkill}
      onSubmitSkill={onSubmitSkill}
      handleSkillChange={handleSkillChange}
      inputAward={inputAward}
      displayAward={displayAward}
      onSubmitAward={onSubmitAward}
      handleAwardChange={handleAwardChange}
      inputLanguage={inputLanguage}
      displayLanguage={displayLanguage}
      onSubmitLanguage={onSubmitLanguage}
      handleLanguageChange={handleLanguageChange}
    />
  );
};

export default Achievement;
