import React from "react";
import { ArrowDropDown } from "./arrow_drop_down.svg";
import "./languaje.css";

export const OptionsDefault = () => {
  return (
    <div className="options-default">
      <div className="frame">
        <div className="div">
          <div className="div-wrapper">
            <div className="text-wrapper">ES</div>
          </div>

          <ArrowDropDown className="arrow-drop-down" color="#F49516" />
        </div>
      </div>
    </div>
  );
};