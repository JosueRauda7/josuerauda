import React from 'react';
import ReactDOM from 'react-dom';

import Salu2 from './components/salu2';
import Menu from './components/menu';

const App = <div>
  <Menu />
  <h1>Hola, mi nombre es Josué</h1>
  <Salu2 />
</div>;

const container = document.getElementById('App');

ReactDOM.render(App, container);