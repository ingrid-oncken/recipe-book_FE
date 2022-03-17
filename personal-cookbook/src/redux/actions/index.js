import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
  ERROR,
} from './types.js'

export const registerAction = (userObject) => {
  return (dispatch) => {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      })
      dispatch({
        type: ERROR,
        payload: false,
      })

      let resp = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
      })
      if (resp.ok) {
        console.log(resp)
        let user = await resp.json()
        dispatch({
          type: REGISTER_SUCCESS,
          payload: user,
        })
        dispatch({
          type: LOADING,
          payload: false,
        })
      } else {
        // we got an error, probably 404, 500, 401, etc.
        dispatch({
          type: ERROR,
          payload: resp.status,
        })
        console.log('error inside register action ELSE')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
