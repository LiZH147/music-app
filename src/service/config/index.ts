// export const BASE_URL = 'http://codercba.com:9002'
export const TIME_OUT = 10000


// 依赖当前的环境自动切换生产环境和开发环境
// console.log(process.env.NODE_ENV) // 输出当前工作环境
let BASE_URL = '';
if(process.env.NODE_ENV === 'development'){
    BASE_URL = 'http://codercba.com:9002';
} else {
    BASE_URL = 'http://codercba.com:9002';
}

export { BASE_URL }