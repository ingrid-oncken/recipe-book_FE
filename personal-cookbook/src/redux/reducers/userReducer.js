import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types.js'
import initialState from '../initalState'

const userReducer = (state = initialState.userState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        isUserFounded: true,
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isUserFounded: null,
      }
    default:
      return state
  }
}
export default userReducer
