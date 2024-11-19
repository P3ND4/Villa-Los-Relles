import React from "react";
import "./MobileMenu.css";

export const MobileMenu = ({ exp }) => {
  return (
    <div className="first-div">
      <div className="second-div">
        <div className="third-div">
          {!exp && (
            <>
              <div className="r1" />
              <div className="r2" />
              <div className="r3" />
            </>
          )}
          {exp && (
            <div className="expanded">
              <div className="r4" />
              <div className="r5" />
            </div>
          )}


        </div>
      </div>
    </div>
  );
};
