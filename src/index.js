import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './Routing';

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('root')
);

