import React from "react";
import ListFormat from "./ListFormat";

const LanguageStorage = ({ language, languageItem, setLanguageItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setLanguageItem(languageItem.filter((el) => el.id !== language.id));
  };

  return <ListFormat text={text} handleDelete={handleDelete} />;
};

export default LanguageStorage;
