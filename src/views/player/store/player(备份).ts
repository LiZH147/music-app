import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse_lyric'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 1.获取song的信息
    getSongDetail(id).then((res) => {
      // console.log(res);
      if (!res.data.songs) return
      const song = res.data.songs[0]
      // console.log(song);
      dispatch(changeCurrentSongAction(song))
    })
    // 2.获取歌词信息
    getSongLyric(id).then((res) => {
      // console.log(res.data.lrc.lyric);
      const lyricString = res.data.lrc.lyric
      const lyrics = parseLyric(lyricString)
      console.log(lyrics)
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '在加纳共和国离婚 (Live版)',
      id: 2154102353,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6068,
          name: '杨坤',
          tns: [],
          alias: []
        },
        {
          id: 1024308,
          name: '张碧晨',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 3,
      crbt: null,
      cf: '',
      al: {
        id: 195206671,
        name: '天赐的声音第五季 第3期',
        picUrl:
          'https://p2.music.126.net/AgpX-LvkCFTChSxL-1y4EQ==/109951169574426926.jpg',
        tns: [],
        pic_str: '109951169574426926',
        pic: 109951169574426930
      },
      dt: 273318,
      h: {
        br: 320000,
        fid: 0,
        size: 10935405,
        vd: -36269,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6561261,
        vd: -33861,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4374189,
        vd: -32215,
        sr: 48000
      },
      sq: {
        br: 834607,
        fid: 0,
        size: 28514221,
        vd: -34886,
        sr: 48000
      },
      hr: {
        br: 1604288,
        fid: 0,
        size: 54810254,
        vd: -35848,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 7,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 2072639869,
        name: '在加纳共和国离婚 (你还爱我吗)',
        artists: [
          {
            id: 34908208,
            name: '菲道尔'
          },
          {
            id: 36706730,
            name: 'Dior大颖'
          }
        ],
        albumMeta: {
          id: 172172609,
          name: '在加纳共和国离婚'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2712562,
      publishTime: 0
    },
    {
      name: '如果可以 (Live版)',
      id: 2149816863,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5538,
          name: '汪苏泷',
          tns: [],
          alias: []
        },
        {
          id: 9940,
          name: '徐佳莹',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 2,
      crbt: null,
      cf: '',
      al: {
        id: 193692363,
        name: '天赐的声音第五季 第1期',
        picUrl:
          'https://p2.music.126.net/9AP_AJLaACliGYpclAlz2g==/109951169534405328.jpg',
        tns: [],
        pic_str: '109951169534405328',
        pic: 109951169534405330
      },
      dt: 292424,
      h: {
        br: 320000,
        fid: 0,
        size: 11699565,
        vd: -54214,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7019757,
        vd: -51637,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4679853,
        vd: -49950,
        sr: 48000
      },
      sq: {
        br: 951640,
        fid: 0,
        size: 34785406,
        vd: -54513,
        sr: 48000
      },
      hr: {
        br: 1721635,
        fid: 0,
        size: 62931121,
        vd: -54188,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 1890530891,
        name: '如果可以',
        artists: [
          {
            id: 5379,
            name: '韦礼安'
          }
        ],
        albumMeta: {
          id: 135391759,
          name: '如果可以'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 2712562,
      rtype: 0,
      rurl: null,
      publishTime: 0
    }
  ],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
