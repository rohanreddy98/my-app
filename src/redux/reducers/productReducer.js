// reducer always has 2 paramaters, state is initial State and action.

// action is destructered as type and payload
import {ActionTypes} from '../constants/actionTypes';

const initialState = {
    products : []
};

export const productReducer = (state = initialState, {type, payload}) => {
 switch(type) {
  case ActionTypes.SET_PRODUCTS : 
    return {...state, products:payload};
  default:
    return state;
 }
}

export const selectedProductReducer = (state ={}, {type, payload}) => {
  switch(type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {...state, ...payload};
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
  }
}