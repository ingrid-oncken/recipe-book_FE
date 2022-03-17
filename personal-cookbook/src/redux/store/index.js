import { createStore, applyMiddleware, compose } from 'redux'
import initialState from '../initalState.js'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { persistedReducer } from '../reducers/index.js'

export const configStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
)

export const persistor = persistStore(configStore)
