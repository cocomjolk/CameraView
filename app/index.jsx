import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import List from './components/List';
import JustDisplay from './components/JustDisplay';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
ReactDOM.render(
  //App is component name
  <App />,
  document.getElementById('anotherApp')
);
ReactDOM.render(
  <List />,
  document.getElementById('listApp')
);
// ReactDOM.render(
//   <JustDisplay />,
//   document.getElementById('displayApp')
// );
