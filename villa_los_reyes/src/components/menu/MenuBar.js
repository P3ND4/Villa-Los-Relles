import React, {useState, useEffect} from 'react'
import {MenuButton} from './MenuButon.js'
import { Language } from './Language.js';
import { MobileMenu } from './MobileMenu.js';
import { Yellow_button } from '../buttons/button.js';
import vector from "./menu_logo.svg";
import './MenuBar.css';

export const MenuBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    useEffect(()=>{
        const handleResize = () => setIsMobile(window.innerWidth < 1200)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [] )
    return (
        <>
            {!isMobile && (
                <div className='menu'>
                    <div className="menuIco">
                        <img className="vector" alt="Vector" src={vector} />
                    </div>
                    <div className='frame-5'>
                        <MenuButton property1={{columns:1, texts:['Inicio']}}/>
                        <MenuButton property1={{columns:1, texts:['Conocenos']}}/>
                        <MenuButton property1={{columns:2, texts:['Servicios', 'e instalaciones']}}/>
                        <MenuButton property1={{columns:2, texts:['Experiencias', 'y aventuras']}}/>
                        <MenuButton property1={{columns:1, texts:['Blog']}}/>
                        <Yellow_button text={'Reservar'}/>
                        <Language/>

                    </div>
                </div>
            )}
            {isMobile && (
                <div className='mobile-menue'>
                    <div className='mobile-frame'>
                        <div className='frame-wrapper-mobile' data-m3-mode ="light">
                            <div className="options">
                                <img className="vector" alt="Vector" src={vector} />
                            </div>
                            <div className='div3'>
                                <Language />
                                <MobileMenu exp={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};