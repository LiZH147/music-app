import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { HotRecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const [keywords, setKeywords] = useState([
    '华语',
    '流行',
    '摇滚',
    '民谣',
    '电子'
  ])
  return (
    <HotRecommendWrapper>
      <div className="header">
        <div className="left">
          <h3>热门推荐</h3>
          <div className="key">
            {keywords.map((item) => {
              return (
                <div className="item">
                  <span className="link">{item}</span>
                  <span className="divider">|</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Link to='/recommend/more'>更多</Link>
          <i className="icon sprite_02"></i>
        </div>
      </div>
      <div className="recommend-list">
        {
            
        }
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
