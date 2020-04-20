import React from 'react';

class Menu extends React.Component
{
    render(){
        return <div>
                    <ul>
                        <li class="list nombre">
                            <a class="logo" href="index.html">Josué Rauda</a>
                        </li>
                        <hr class="hr-menu" />
                        <a class="list opcion" href="index.html">
                            <li>Inicio</li>
                        </a>
                        <a class="list opcion" href="">
                            <li>Categorías</li>
                        </a>
                        <a class="list opcion" href="">
                            <li>Contáctame</li>
                        </a>
                        <a class="list opcion" href="">
                            <li>Biografía</li>
                        </a>
                    </ul>
            </div>;
    }
}

export default Menu;