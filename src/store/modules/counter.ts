import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello Redux'
  },
  reducers: {
    // 此处创建变量的action修改函数
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

// 使用counterSlice.actions对修改函数进行暴露
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
