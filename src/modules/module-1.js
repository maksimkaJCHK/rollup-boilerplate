import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.scss';
const node = document.getElementById('app');

function Primer(props) {
  let { name } = props;

  return (
    <div className = "brd">
      <p>Привет { name }!</p>
      <p>Твое имя содержит - <b>{ name.length }</b> символов</p>
    </div>
  );
}

ReactDOM.render(
  <Primer name="Максимка" />,
  node
)