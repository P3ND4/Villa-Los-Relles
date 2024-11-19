import React, {useState, useEffect} from 'react'
import {MenuButton} from './MenuButon.js'
import { OptionsDefault } from './Languaje.js';
import { MobileMenu } from './MobileMenu.js';
import vector from "./menu_logo.svg";
import './MenuBar.css'
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
                    <div className='frame-4'>
                        <div className="menuIco">
                            <img className="vector" alt="Vector" src={vector} />
                        </div>
                        <div className='frame-5'>
                            <MenuButton property1={{columns:1, texts:['Inicio']}}/>
                            <MenuButton property1={{columns:2, texts:['Conoce', 'Villa Los Reyes']}}/>
                            <MenuButton property1={{columns:2, texts:['Nuestras', 'Habitaciones']}}/>
                            <MenuButton property1={{columns:2, texts:['Servicios', 'e instalaciones']}}/>
                            <MenuButton property1={{columns:2, texts:['Experiencias', 'y aventuras']}}/>
                            <MenuButton property1={{columns:2, texts:['Paquetes', 'Promocionales']}}/>
                            <MenuButton property1={{columns:2, texts:['Reseñas', 'y comentarios']}}/>
                        </div>
                        <OptionsDefault />
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
                                <OptionsDefault />
                                <MobileMenu exp={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};