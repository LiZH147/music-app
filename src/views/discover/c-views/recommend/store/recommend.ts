import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getBanners from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (args, { dispatch }) => {
    // const res = await getBanners()
    const res = { "banners": [{ "imageUrl": "http://p1.music.126.net/0fxC3EUd7yyDtNLu6fv8dw==/109951169618403189.jpg", "targetId": 2158286660, "adid": null, "targetType": 1, "titleColor": "red", "typeTitle": "新歌首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "2158286660", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286968.-895658855.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/-TTsLIRzdPs6rMcWaZgEVw==/109951169618406663.jpg", "targetId": 14721931, "adid": null, "targetType": 1004, "titleColor": "red", "typeTitle": "独家策划", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "14721931", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286969.-1995709243.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/BuaHJd3aiUBR44GdxbaXgA==/109951169618412239.jpg", "targetId": 196947910, "adid": null, "targetType": 10, "titleColor": "red", "typeTitle": "新碟首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "196947910", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286971.-1995589091.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/92hSLWjbbs8w00OkYQf5Og==/109951169618411283.jpg", "targetId": 2157942003, "adid": null, "targetType": 1, "titleColor": "red", "typeTitle": "新歌首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "2157942003", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286972.-1995496953.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/tap8NqyB87w2VK5dkFuw_Q==/109951169618422775.jpg", "targetId": 2156113712, "adid": null, "targetType": 1, "titleColor": "red", "typeTitle": "新歌首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "2156113712", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286973.-1995679362.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/8jQ5aOadOXU_3jefp9Stgg==/109951169618439008.jpg", "targetId": 0, "adid": null, "targetType": 3000, "titleColor": "blue", "typeTitle": "数字专辑", "url": "https://music.163.com/store/newalbum/detail?id=193299140", "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "0", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286975.-1995585117.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/CXIubCuUKBn_i20DTSsSmQ==/109951169618431394.jpg", "targetId": 196779843, "adid": null, "targetType": 10, "titleColor": "red", "typeTitle": "新碟首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "196779843", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286976.-1995465238.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/hBPdKQCIdHxVQncVVQ5krA==/109951169620564188.jpg", "targetId": 197086614, "adid": null, "targetType": 10, "titleColor": "red", "typeTitle": "新碟首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "197086614", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9271963.-1995562334.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/iaTnChHolUaaYvybFhte8w==/109951169618443277.jpg", "targetId": 2157889397, "adid": null, "targetType": 1, "titleColor": "red", "typeTitle": "新歌首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "2157889397", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9286978.-1995615996.null", "bannerBizType": "force_banner" }, { "imageUrl": "http://p1.music.126.net/6II9wI9WttAiDGBwS13eXg==/109951169618562693.jpg", "targetId": 2159057240, "adid": null, "targetType": 1, "titleColor": "red", "typeTitle": "新歌首发", "url": null, "exclusive": false, "monitorImpress": null, "monitorClick": null, "monitorType": null, "monitorImpressList": null, "monitorClickList": null, "monitorBlackList": null, "extMonitor": null, "extMonitorInfo": null, "adSource": null, "adLocation": null, "adDispatchJson": null, "encodeId": "2159057240", "program": null, "event": null, "video": null, "song": null, "scm": "1.music-homepage.homepage_banner_force.banner.9307974.-1995645853.null", "bannerBizType": "force_banner" }], "code": 200 }
    dispatch(changeBannerAction(res.banners))
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
