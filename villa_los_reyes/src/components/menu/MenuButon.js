import PropTypes from "prop-types";
import React, { useState } from 'react';
import "./MenuButton.css";

export const MenuButton = ({ property1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="tabs"
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="tab">
        <div className="state-layer">
          <div className="tab-contents">
          {!isHovered && property1 === 'default' && (
            <> 
              <div className="label">
                Conoce
                <br />
                Villa Los Reyes
              </div>
            </>
          )}
            
          {isHovered && (
            <>
              <div className="text-wrapper">
                Conoce
                <br />
                Villa Los Reyes
              </div>

              <div className="indicator">
                <div className="shape" />
              </div>
            </>
          )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  property1: PropTypes.oneOf(["default", 'select']),
};
