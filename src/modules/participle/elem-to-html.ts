/**
 * @description elem to html
 * @author emike
 */

import { SlateElement } from '@wangeditor/editor'
import { ParticipleElement } from './custom-types'

// 生成 html 的函数
function participleToHtml(elem: SlateElement, childrenHtml: string): string {
  const { value = '', text = '' } = elem as ParticipleElement
  return `<say-as data-w-e-type="ice_participle" data-value="${value}" data-text="${text}" interpret-as="${value}">${text}</say-as>`
}

const participleToHtmlConf = {
  type: 'ice_participle',
  elemToHtml: participleToHtml,
}

export default participleToHtmlConf
