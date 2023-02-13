// 用于校验 url
export const urlReg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => urlReg.test(path)

/** 判断是否是图片链接 */
export const imgReg = /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i

export const isImg = (path: string): boolean => imgReg.test(path);