import React from "react";
import ListDelete from "./ListDelete";

const LanguageStorage = ({ language, languageItem, setLanguageItem, text }) => {
  const handleDelete = (event) => {
    console.log(event.target.value);
    setLanguageItem(languageItem.filter((el) => el.id !== language.id));
  };

  return <ListDelete text={text} handleDelete={handleDelete} />;
};

export default LanguageStorage;
