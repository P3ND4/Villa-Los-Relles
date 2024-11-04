import React from "react";
import "./MenuIco.css";
import vector from "./menu_logo.svg";

export const MenuIco = () => {
  return (
    <div className="menuIco">
      <img className="vector" alt="Vector" src={vector} />
    </div>
  );
};