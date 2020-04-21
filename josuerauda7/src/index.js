import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './Global.css';

//import pages
import Blog from './pages/Blog';

const App = <Blog />;

const container = document.getElementById('App');

ReactDOM.render(App, container);