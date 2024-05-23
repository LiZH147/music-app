import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'

import { PlaybarWrapper, BarPlayerInfo, BarControl, BarOperator } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getSongPlayerUrl } from '@/utils/handle-player'
import { formatTime, getImageSize } from '@/utils/format'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayMode
} from '../store/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  /**组件内部自定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 记录音乐播放进度
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false) // 记录是否在拖拽
  const audioRef = useRef<HTMLAudioElement>(null)

  /**从redux中获取的数据 */
  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  /**组件内部副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    // console.log(audioRef)
    audioRef.current!.src = getSongPlayerUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败', err)
      })
    setDuration(currentSong.dt)
  }, [currentSong])

  /**音乐进度逻辑 */
  function handleOnTimeUpdate() {
    // console.log(audioRef.current!.currentTime)
    // 1.获取当前歌曲播放时间
    const currentTime = audioRef.current!.currentTime * 1000

    // 2.计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    /**3.根据当前时间匹配歌词
     * let index = -1
     * 这种初始化会造成最后一句歌词不能被匹配到的问题
     * 按照下面的初始化方式，每次开始时index均指向最后一句歌词
     * 当不匹配时自然输出最后一句了
     */
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i
        break
      }
    }
    // console.log(lyrics[index]?.text)

    /**4.匹配对应歌词的index
     * 仅按照3中的做法会有性能上的问题：
     * handleOnTimeUpdate调用时间时毫秒级的，这会造成index不断刷新
     * 如果直接用index去渲染组件，会造成组件频繁更新，导致性能问题
     * 此处将index存储至redux中，新的index与redux中旧值对比，只在有更新时更新redux中值
     * 渲染时取redux值作为索引
     */
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    // console.log(lyrics[lyricIndex]?.text)

    /**5.利用antd的message组件展示歌词，重写属性 */
    message.open({
      // content: <div>ssss</div>,
      content: lyrics[lyricIndex]?.text,
      duration: 0,
      key: 'lyric'
    })
  }
  function handleTimeEnded() {
    if(playMode === 2){
      audioRef.current!.currentTime = 0;
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  function handleSliderChanging(value: number) {
    setIsSliding(true)
    setProgress(value)
  }
  function handleSliderChanged(value: number) {
    // console.log(value)
    const currentTime = (value / 100) * duration
    audioRef.current!.currentTime = currentTime / 1000
    setProgress(value)
    setIsSliding(false)
    // setCurrentTime(currentTime)
  }
  /**组件内部的事件处理 */
  function handlePlayBtnClick() {
    // console.log(isPlaying)
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play()
    setIsPlaying(!isPlaying)
  }
  function handleChangeMusic(isNext = true) {
    // 放到../store/player.t中处理
    dispatch(changeMusicAction(isNext))
    // 切完歌要自动播放，解开useEffect中的注释
  }
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayMode(newPlayMode))
    // console.log(newPlayMode)
  }
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isplaying={isPlaying ? 1 : 0}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => {
              handleChangeMusic(false)
            }}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => {
              handleChangeMusic(true)
            }}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                onChangeComplete={handleSliderChanged}
                onChange={handleSliderChanging}
                tooltip={{ formatter: null }}
                step={0.2}
                value={progress}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playmode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleOnTimeUpdate}
        onEnded={handleTimeEnded}
      ></audio>
    </PlaybarWrapper>
  )
}

export default memo(AppPlayerBar)
