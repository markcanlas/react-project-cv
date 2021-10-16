import React from "react";
import ListDelete from "./ListDelete";

const AwardStorage = ({ award, awardItem, setAwardItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setAwardItem(awardItem.filter((el) => el.id !== award.id));
  };

  return <ListDelete text={text} handleDelete={handleDelete} />;
};

export default AwardStorage;
