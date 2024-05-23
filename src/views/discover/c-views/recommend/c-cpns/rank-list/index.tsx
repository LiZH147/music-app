import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps{
    children?: ReactNode,
}

const RankList: FC<IProps> = () => {
    return(<div>RankList</div>)
}


export default memo(RankList);