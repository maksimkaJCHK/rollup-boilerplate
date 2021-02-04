import React from 'react';
import { connect } from 'react-redux';
import { loadDog } from '../store/actions';

const DogExample = (props) => {
  let { url, load, loadDog } = props;

  return (
    <div className = 'dog-container'>
      <div className = 'dog-img'>
        { load
          ? 'Идет загрузка картинки...'
          : url
            ? <img src = { url } />
            : 'Картинка не загружена'
        }
      </div>
      {
        load
          ? <button>Идет загрузка картинки...</button>
          : <button onClick = { loadDog }>Загрузить картинку</button>
      }
    </div>
  )
}

let mapStateToProps = (state) => {
  let { load, url } = state;
  return {
    url,
    load
  }
}

let mapDispatchToProps = { loadDog };

export default connect(mapStateToProps, mapDispatchToProps)(DogExample);