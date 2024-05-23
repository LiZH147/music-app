import React, { memo } from "react";
import type { ReactNode } from "react";

interface IProps{
    children?: ReactNode, // 可选属性
    name: string,
    age: number,
    height?: number
}
const Download: React.FC<IProps> = (props) => {
    return(
        <div>
            <div>name: {props.name}</div>
            <div>age: {props.age}</div>
            <div>height: {props.height}</div>
        </div>
    )
}

Download.defaultProps = {
    name:'222',
    age: 20
}

// const Download = (props:IProps) => {
//     return(
//         <div>
//             <div>name: {props.name}</div>
//             <div>age: {props.age}</div>
//             <div>height: {props.height}</div>
//         </div>
//     )
// }

export default memo(Download);