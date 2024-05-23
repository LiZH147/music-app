import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps{
    children?: ReactNode,
}

const NewAlbum: FC<IProps> = () => {
    return(<div>NewAlbum</div>)
}


export default memo(NewAlbum);