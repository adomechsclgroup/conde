import { SET_MESSAGE } from '../types/message';
export const SetMessage = (message) => {
  return dispatch => {
    dispatch({
       type: SET_MESSAGE,
       payload: {
        message
       }
    })
  }
}