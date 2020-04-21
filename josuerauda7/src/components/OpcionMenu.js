import React from "react";

//style
import './styles/OpcionMenu.css';

class OpcionMenu extends React.Component {
  render() {
    return (
      <a className="list opcion col-2" href={this.props.url}>
        <li>{this.props.opcion}</li>
      </a>
    );
  }
}

export default OpcionMenu;