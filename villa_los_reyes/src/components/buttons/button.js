import React from "react";
import './buttons.css';

export const Yellow_button = ({text}) => {

    return(
        <div className="yellow-buttom">
            <div className="state-layer">
                <label className="text">
                    {text}
                </label>
            </div>
        </div>
    )

}  
