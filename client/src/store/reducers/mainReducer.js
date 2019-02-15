// import CONSTANT_VARIABLE from actions
import { GET_PROJECTS } from '../actions';

const initialState = {
  projects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
