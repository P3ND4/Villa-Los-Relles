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

    );
};