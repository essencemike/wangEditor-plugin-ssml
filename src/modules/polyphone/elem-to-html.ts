/**
 * @description elem to html
 * @author emike
 */

import { SlateElement } from '@wangeditor/editor'
import { AttachmentElement, BreakElement, ParticipleElement } from './custom-types'

// 生成 html 的函数
function attachmentToHtml(elem: SlateElement, childrenHtml: string): string {
  const { link = '', fileName = '' } = elem as AttachmentElement
  return `<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="${link}" download="${fileName}">${fileName}</a>`
}

// 生成 html 的函数
function breakToHtml(elem: SlateElement, childrenHtml: string): string {
  const { value = '' } = elem as BreakElement
  return `<break data-w-e-type="ice_break" data-value="${value}" time="${+value * 1000}ms" />`
}

// 生成 html 的函数
function participleToHtml(elem: SlateElement, childrenHtml: string): string {
  const { value = '', text = '' } = elem as ParticipleElement
  return `<say-as data-w-e-type="ice_participle" data-value="${value}" data-text="${text}" interpret-as="${value}">${text}</say-as>`
}

// 配置
export const aconf = {
  type: 'attachment', // 节点 type ，重要！！！
  elemToHtml: attachmentToHtml,
}

// 配置
export const breakToHtmlConf = {
  type: 'ice_break', // 节点 type ，重要！！！
  elemToHtml: breakToHtml,
}

export const participleToHtmlConf = {
  type: 'ice_participle',
  elemToHtml: participleToHtml,
}
