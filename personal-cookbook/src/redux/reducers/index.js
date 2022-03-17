import { combineReducers } from 'redux'
import appReducer from './appReducer.js'
import userReducer from './userReducer.js'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

export const reducers = combineReducers({
  appState: appReducer,
  userState: userReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

export const persistedReducer = persistReducer(persistConfig, reducers)
