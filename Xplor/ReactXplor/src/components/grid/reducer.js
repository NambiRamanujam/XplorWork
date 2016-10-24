import * as types from './constants';
import initialState from './initial-state';

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case types.CMP_GRID_SHOW_DESTINATION_MODAL:
      return {
        ...state,
        showModal: true,
        cityName: action.city
      };
    case types.CMP_GRID_HIDE_DESTINATION_MODAL:
      return {
        ...state,
        showModal: false
      };

    default:
      return state;
  }
}
