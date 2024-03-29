import React from 'react';
import ReactDOM from 'react-dom';

const App = props  => {
  const favoriteCars = [
    'Honda CR-V', 
    'Toyota Highlander', 
    'Ford F-150', 'BMW X3', 
    'Subaru Crosstrek'
  ];
  return <List favoriteCars={favoriteCars}/>;
};

const List = props => {
  const favCarsList= props.favoriteCars.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ol>{favCarsList}</ol>;
};

ReactDOM.render(
  <App />, document.getElementById('root')
);
