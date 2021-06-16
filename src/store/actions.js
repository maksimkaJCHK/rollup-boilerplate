import { ADD_DOG, LOAD_DOG } from './const';

export const addDog = (url) => {
  return {
    type: ADD_DOG,
    url
  }
}

export const loadDog = () => {
  return {
    type: LOAD_DOG
  }
}