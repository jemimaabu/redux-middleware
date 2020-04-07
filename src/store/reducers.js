import { AUTHORIZE, UNAUTHORIZE } from './actions';

const initialState = {
  user: '',
  isAuthorized: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZE:
      return {
        ...state,
        user: action.payload,
        isAuthorized: true
      };
    case UNAUTHORIZE:
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