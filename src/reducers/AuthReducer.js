import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // Object.assign({}, state, state.email="test")
      // whole new object, that contains props of old objects
      return {...state, email : action.payload};
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        loading: false,
        password: ''
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: ''
      }
    default:
      return state;
  }
}
