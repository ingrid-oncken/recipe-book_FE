import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
  ERROR,
} from './types.js'

export const registerAction = (userObject) => {
  console.log(
    `this is CLG of userObject -- line 12 -- actions/index.js ${userObject}`
  )
  return async (dispatch) => {
    console.log(
      `this is CLG of userObject -- line 16
       -- actions/index.js ${userObject}`
    )
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
        body: JSON.stringify(userObject),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(
        `this is CLG of resp await fetch -- line 38 -- actions/index.js ${resp}`
      )
      console.log(
        `this is CLG of userObject -- line 41 -- actions/index.js ${userObject}`
      )

      if (resp.ok) {
        console.log(
          `this is CLG of resp inside if -- line 46 -- actions/index.js ${resp}`
        )

        let user = await resp.json()
        console.log(`this is CLG USER -- line 50 -- actions/index.js ${user}`)

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
        console.log('error inside register action ELSE', resp.status)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
