import PropTypes from "prop-types";
import React from "react";
import "./MenuButton.css";

export const MenuButton = ({ property1 }) => {
  return (
    <div className="tabs">
      <div className="tab">
        <div className="state-layer">
          <div className="tab-contents">
            <div className="label">
              Conoce
              <br />
              Villa Los Reyes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
