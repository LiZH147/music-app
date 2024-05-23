import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse_lyric'
import { IRootState } from '@/store'

interface IThunkState {
  state: IRootState
}
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id, { dispatch, getState }) => {
  /**准备播放歌曲时分为两种情况
   * 从playSongList中拿
   * 从后台获取
   */
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => id === item.id)
  if (findIndex === -1) {
    // 没找到
    // 1.获取song的信息
    getSongDetail(id).then((res) => {
      // console.log(res);
      if (!res.data.songs) return
      const song = res.data.songs[0]
      // console.log(song);
      dispatch(changeCurrentSongAction(song))
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changePlaySongList(newPlaySongList))
      dispatch(changePlaySongIndex(newPlaySongList.length - 1))
    })
  } else {
    // 找到了
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndex(findIndex))
  }

  // 2.获取歌词信息
  getSongLyric(id).then((res) => {
    // console.log(res.data.lrc.lyric);
    const lyricString = res.data.lrc.lyric
    const lyrics = parseLyric(lyricString)
    console.log(lyrics)
    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changeMusic',
  (isNext, { dispatch, getState }) => {
    const player = getState().player
    const { playMode, playSongIndex, playSongList } = { ...player }
    let newIndex = playSongIndex
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * playSongList.length)
    } else {
      newIndex = isNext ? playSongIndex + 1 : playSongIndex - 1
      if (newIndex < 0) newIndex = playSongList.length - 1
      if (newIndex > playSongList.length - 1) newIndex = 0
    }
    const song = playSongList[newIndex]
    dispatch(changePlaySongIndex(newIndex))
    dispatch(changeCurrentSongAction(song))

    // 2.获取新的歌词信息
    getSongLyric(song.id).then((res) => {
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
  playMode: number
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
    },
    {
      name: '爱情转移 (Live版)',
      id: 2156439237,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 2124,
          name: '陈楚生',
          tns: [],
          alias: []
        },
        {
          id: 9269,
          name: '容祖儿',
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
        id: 196072242,
        name: '天赐的声音第五季 第4期',
        picUrl:
          'https://p2.music.126.net/DzkD7eQvZgAk58dbRa230Q==/109951169597295003.jpg',
        tns: [],
        pic_str: '109951169597295003',
        pic: 109951169597295000
      },
      dt: 304511,
      h: {
        br: 320000,
        fid: 0,
        size: 12182445,
        vd: -32345,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7309485,
        vd: -29712,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4873005,
        vd: -27943,
        sr: 48000
      },
      sq: {
        br: 850775,
        fid: 0,
        size: 32383858,
        vd: -32425,
        sr: 48000
      },
      hr: {
        br: 1620435,
        fid: 0,
        size: 61680121,
        vd: -32561,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 65536,
        name: '爱情转移',
        artists: [
          {
            id: 2116,
            name: '陈奕迅'
          }
        ],
        albumMeta: {
          id: 6434,
          name: '认了吧'
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
    },
    {
      name: '命运 (Live版)',
      id: 2151849447,
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
      v: 2,
      crbt: null,
      cf: '',
      al: {
        id: 194379564,
        name: '天赐的声音第五季 第2期',
        picUrl:
          'https://p1.music.126.net/6YvvqrDQ8OuTn7jwWJ0F2w==/109951169553177208.jpg',
        tns: [],
        pic_str: '109951169553177208',
        pic: 109951169553177220
      },
      dt: 258804,
      h: {
        br: 320000,
        fid: 0,
        size: 10354605,
        vd: -44779,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6212781,
        vd: -42203,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4141869,
        vd: -40524,
        sr: 48000
      },
      sq: {
        br: 890884,
        fid: 0,
        size: 28820573,
        vd: -45120,
        sr: 48000
      },
      hr: {
        br: 1660461,
        fid: 0,
        size: 53716801,
        vd: -44481,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 2,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2712562,
      mv: 0,
      publishTime: 1714665600000
    }
  ],
  playSongIndex: -1,
  playMode: 0 // 0：顺序 1：随机 2：单曲
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
    },
    changePlaySongList(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndex(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayMode(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndex,
  changePlaySongList,
  changePlayMode
} = playerSlice.actions
export default playerSlice.reducer
