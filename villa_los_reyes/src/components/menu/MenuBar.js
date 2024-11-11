import React from 'react'
import {MenuButton} from './MenuButon.js'
import { MenuIco } from './MenuIco.js';
import { OptionsDefault } from './Languaje.js';
export const MenuBar = () => {

    return (
        <div className='menu'>
            <div className='frame-4'>
                <div className='icon-frame'>
                    <MenuIco className = 'ico' />
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