import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Rotas } from './Componentes/Rotas';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Rotas />
  </Router>,
  document.getElementById('root')
);


