import * as gridTypes from './constants';

export function toggleDestinationModal(show, city) {
  return function(dispatch) {
    if(show) {
      dispatch({
        type: gridTypes.CMP_GRID_SHOW_DESTINATION_MODAL,
        city
      });
    } else {
      dispatch({
        type: gridTypes.CMP_GRID_HIDE_DESTINATION_MODAL
      });
    }
  }
}
