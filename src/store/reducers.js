import { ADD_DOG, LOAD_DOG } from './const';

const DogReducer = (state = { url: null, load: false }, action) => {
  switch(action.type) {
    case ADD_DOG:
      return {
        ...state,
        url: action.url,
        load: false
      }
    case LOAD_DOG:
      return {
        ...state,
        load: true
      }
    default:
      return state
  }
}

export default DogReducer;