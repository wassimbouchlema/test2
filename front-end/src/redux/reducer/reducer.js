import { GET_CONTACTS } from "../actions/actionTypes";

const inialState = {
  contacts: []
};
const reducer = (state = inialState, action) => {
  switch (action.type) {
      case GET_CONTACTS : 
      return {...state , contacts: action.payload}
          
          
  
      default:
          return state
  }
};
export default reducer