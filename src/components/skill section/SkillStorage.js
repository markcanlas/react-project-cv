import React from "react";
import ListDelete from "./ListDelete";

const SkillStorage = ({ skill, skillItem, setSkillItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setSkillItem(skillItem.filter((el) => el.id !== skill.id));
  };

  return <ListDelete text={text} handleDelete={handleDelete} />;
};

export default SkillStorage;
