import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import './styles/style.less';
const node = document.getElementById('app');

export default class Primer extends Component {
  render() {
    let lngt = this.props.name.length;

    return (
      <div className = "brd">
        <p>Привет { this.props.name }!</p>
        <p>Твое имя содержит - <b>{ lngt }</b> символов</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Primer name="Максим" />,
  node
)