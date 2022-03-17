import { LOADING, ERROR } from '../actions/types.js'
import initialState from '../initalState'

const appReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
export default appReducer
