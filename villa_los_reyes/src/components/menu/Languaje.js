import React from "react";
import { ArrowDropDownScreen } from "./ArrowDropDown.js";
import "./languaje.css";

export const OptionsDefault = () => {
  return (
    <div className="options-default">
      <div className="frame">
        <div className="div">
          <div className="div-wrapper">
            <div className="text-wrapper">ES</div>
          </div>

          <ArrowDropDownScreen className="arrow-drop-down"  />
        </div>
      </div>
    </div>
  );
};
