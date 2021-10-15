import React from "react";
import ListFormat from "./ListFormat";

const SkillStorage = ({ skill, skillItem, setSkillItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setSkillItem(skillItem.filter((el) => el.id !== skill.id));
  };

  return <ListFormat text={text} handleDelete={handleDelete} />;
};

export default SkillStorage;
