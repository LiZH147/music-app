import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, shallowEqual, useDispatch, useSelector } from 'react-redux'

import counterSlice from './modules/counter'
import recommendSlice from '../views/discover/c-views/recommend/store/recommend'
import playerSlice from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendSlice,
    player: playerSlice
  }
})

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export const useAppDispatch: () => DispatchType = useDispatch

export const shallowEqualApp = shallowEqual;

export default store
