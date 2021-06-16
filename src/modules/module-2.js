import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.scss';
const node = document.getElementById('app1');

export default class Primer1 extends Component {
  render() {
    let { name } = this.props;

    return (
      <div className = "brd">
        <p>Привет { name }!</p>
        <p>Твое имя содержит - <b>{ name.length }</b> символов</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Primer1 name="Максим" />,
  node
)