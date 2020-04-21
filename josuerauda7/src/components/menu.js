import React from 'react';

//components
import OpcionMenu from './OpcionMenu';

//style
import './styles/Menu.css';

class Menu extends React.Component
{
    render(){
        return (<div className="menu container-fluid">
                    <ul className="row">
                        <li className="nombre col-2">
                            <a className="logo" href="/">Josué Rauda</a>
                        </li>
                        <OpcionMenu opcion="Inicio" url="/" />
                        <OpcionMenu opcion="Blog" url="/" />
                        <OpcionMenu opcion="Contáctame" url="/" />
                        <OpcionMenu opcion="Sobre mí" url="/" />
                    </ul>
            </div>);
    }
}

export default Menu;