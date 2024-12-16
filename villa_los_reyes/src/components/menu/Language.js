import React from "react";
import { ReactComponent as LangIco } from './language.svg'; // Importa el SVG
import "./language.css";

export const Language = () => {
  return (
    <div className="lang-option">
      <LangIco/>
    </div>
  );
};
