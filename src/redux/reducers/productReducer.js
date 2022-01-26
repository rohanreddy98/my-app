// reducer always has 2 paramaters, state is initial State and action.

// action is destructered as type and payload
import {ActionTypes} from '../constants/actionTypes';

const initialState = {
    product : [{
            id: 1,
            title: 'rohan',
            category: 'programmer'
    },
]
};

export const productReducer = (state = initialState, {type, payload}) => {
 switch(type) {
  case ActionTypes.SET_PRODUCTS : 
    return state;
  default:
    return state;
 }
}