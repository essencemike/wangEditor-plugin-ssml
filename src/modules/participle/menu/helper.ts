/**
 * @description helper fns
 * @author emike
 */

export function isChineseText(string: string): boolean {
  if (!string) {
    return false
  }
  const pattern = new RegExp('[\u4E00-\u9FA5]+')
  return pattern.test(string)
}

export function isAllNumString(string: string): boolean {
  if (!string) return false
  if (string.split('').every(item => item === ' ')) {
    return false
  }
  return !isNaN(Number(string))
}

export function isAllLetterString(string: string): boolean {
  if (!string) return false
  return /^[a-zA-Z]*$/.test(string)
}

export const isSingleChinese = (selectText: string) =>
  selectText?.length === 1 && isChineseText(selectText)
