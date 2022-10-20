import { http } from './http'

// 获取图片
export const getImages = (params) => http.get('/getImages', params)

// 获取一句名言
export const sentences = (params) => http.get('/sentences', params)

// 获取视频
export const videoData = (params) => http.get('/getHaoKanVideo', params)

// 获取迷你视频
export const miniVideo = (params) => http.get('/getMiniVideo', params)