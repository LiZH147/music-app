import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getBanners from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (args, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannerAction(res.data.banners))
  }
)

interface IBanners {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}
interface IRecommendState {
  banners: IBanners[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
