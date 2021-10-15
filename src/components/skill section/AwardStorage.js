import React from "react";
import ListFormat from "./ListFormat";

const AwardStorage = ({ award, awardItem, setAwardItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setAwardItem(awardItem.filter((el) => el.id !== award.id));
  };

  return <ListFormat text={text} handleDelete={handleDelete} />;
};

export default AwardStorage;
