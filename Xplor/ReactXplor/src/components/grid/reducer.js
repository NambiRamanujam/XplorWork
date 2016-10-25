import * as types from './constants';
import initialState from './initial-state';

export default function gridReducer(state = initialState, action) {
  switch (action.type) {
    case types.CMP_GRID_SHOW_DESTINATION_MODAL:
      return {
        ...state,
        showDestinationModal: true,
        cityName: action.city
      };
    case types.CMP_GRID_HIDE_DESTINATION_MODAL:
      return {
        ...state,
        showDestinationModal: false
      };
    case types.CMP_GRID_SHOW_CONTACT_MODAL:
      return {
        ...state,
        showContactModal: true,
        showDestinationModal: false
      };
    case types.CMP_GRID_HIDE_CONTACT_MODAL:
      return {
        ...state,
        showContactModal: false
      };

    default:
      return state;
  }
}
