/**
 * @description elem to html
 * @author emike
 */

import { SlateElement } from '@wangeditor/editor'
import { BreakElement } from './custom-types'

// 生成 html 的函数
function breakToHtml(elem: SlateElement, childrenHtml: string): string {
  const { value = '' } = elem as BreakElement
  return `<break data-w-e-type="ice_break" data-value="${value}" time="${+value * 1000}ms" />`
}

// 配置
const breakToHtmlConf = {
  type: 'ice_break', // 节点 type ，重要！！！
  elemToHtml: breakToHtml,
}

export default breakToHtmlConf
