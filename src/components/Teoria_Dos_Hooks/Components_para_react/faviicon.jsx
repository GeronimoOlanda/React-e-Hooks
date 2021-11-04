//npm i react-favicon - instalar packeage
import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

ReactDOM.render(
  <div>
    <Favicon url="http://oflisback.github.io/react-favicon/img/github.ico" />
    <h1>Hello, Favicon!</h1>
  </div>,
  document.getElementById('root'),
);
