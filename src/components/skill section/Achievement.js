import React, { useState } from "react";
import SkillStorage from "./SkillStorage";
import DataFormat from "./DataFormat";
import AwardsStorage from "./AwardStorage";
import LanguageStorage from "./LanguageStorage";
import "./Achievement.css";

const Achievement = ({
  inputText,
  setInputText,
  skillItem,
  setSkillItem,
  awardItem,
  setAwardItem,
  languageItem,
  setLanguageItem,
}) => {
  const handleChange = (value) => {
    setInputText(value);
  };

  const onSubmitSkill = (event) => {
    event.preventDefault();
    setSkillItem([
      ...skillItem,
      { skills: inputText, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const onSubmitAward = (event) => {
    event.preventDefault();
    setAwardItem([
      ...awardItem,
      { awards: inputText, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const onSubmitLanguage = (event) => {
    event.preventDefault();
    setLanguageItem([
      ...languageItem,
      { languages: inputText, id: Math.random() * 1000 },
    ]);
    setInputText("");
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
      displaySkill={displaySkill}
      displayAward={displayAward}
      displayLanguage={displayLanguage}
      onSubmitSkill={onSubmitSkill}
      onSubmitAward={onSubmitAward}
      onSubmitLanguage={onSubmitLanguage}
      handleChange={handleChange}
      inputText={inputText}
      setInputText={setInputText}
    />
  );
};

export default Achievement;
