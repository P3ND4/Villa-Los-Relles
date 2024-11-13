import React from 'react'
import {MenuButton} from './MenuButon.js'
import { OptionsDefault } from './Languaje.js';
import vector from "./menu_logo.svg";
import './MenuBar.css'
export const MenuBar = () => {

    return (
        <div className='menu'>
            <div className='frame-4'>
                <div className="menuIco">
                    <img className="vector" alt="Vector" src={vector} />
                </div>
                <div className='frame-5'>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                    <MenuButton property1={'default'}/>
                </div>
                <OptionsDefault />
            </div>
        </div>

    );
};