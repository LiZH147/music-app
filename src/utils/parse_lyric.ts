export interface ILyric {
  time: number
  text: string
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  const lines: string[] = lyricString.split('\n')
  const lyrics: ILyric[] = []
  for (let line of lines) {
    // 1.匹配结果
    const results = timeRegExp.exec(line)
    if (!results) continue

    // 2.获取每一组的数据
    const time1 = Number(results[1]) * 60 * 1000
    const time2 = Number(results[2]) * 1000
    const time3 =
      results[3].length === 3 ? Number(results[3]) : Number(results[3]) * 10
    const time = time1 + time2 + time3

    // 3.通过用空字符替换正则表达式匹配的部分，来获取剩余部分
    const text = line.replace(timeRegExp, '')

    lyrics.push({ time, text })
  }
  return lyrics
}
