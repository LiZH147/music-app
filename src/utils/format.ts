export function formatCount(count: number){
    if (count < 0) return;
    if (count < 10000) {
      return count;
    } else if (Math.floor(count / 10000) < 10000) {
      return Math.floor(count / 1000) / 10 + "万";
    } else {
      return Math.floor(count / 10000000) / 10 + "亿";
    }
}
export function getImageSize(
    imageUrl:string,
    width:number,
    height:number = width
){
  return `${imageUrl}?param=${width}x${height}`;
    
}

export function formatTime(time:number){
  const timeSecond = time / 1000;
  const minute = Math.floor(timeSecond / 60);
  const second = Math.floor(timeSecond) % 60;
  // 以上得到3：4
  // 下面进一步格式化
  const formatMinute = String(minute).padStart(2,'0');
  const formatSecond = String(second).padStart(2,'0');

  return `${formatMinute}:${formatSecond}`
}