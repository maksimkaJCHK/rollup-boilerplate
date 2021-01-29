import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.scss';
const node = document.getElementById('app');

function Primer(props) {
  let lngt = props.name.length;

  return (
    <div className = "brd">
      <p>Привет { props.name }!</p>
      <p>Твое имя содержит - <b>{ lngt }</b> символов</p>
    </div>
  );
}

ReactDOM.render(
  <Primer name="Максимка" />,
  node
)