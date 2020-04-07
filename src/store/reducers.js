import { AUTHORISE, UNAUTHORISE } from './actions';

const initialState = {
  user: '',
  isAuthorized: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORISE:
      return {
        ...state,
        user: action.payload,
        isAuthorized: true
      };
    case UNAUTHORISE:
      return {
        ...state,
        user: '',
        isAuthorized: false
      };
    default:
      return state;
  };
}

export default rootReducer;