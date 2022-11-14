/**
 * @description text to html
 * @author emike
 */

import { SlateText, SlateDescendant } from '@wangeditor/editor'
import { StyledText } from './custom-types'
import $, { getOuterHTML, getTagName, isPlainText } from '../../utils/dom'

//【注意】color bgColor fontSize fontFamily 在另外的菜单

/**
 * 生成加了样式的 text html
 * @param textNode textNode
 * @param html text html
 */
function genStyledHtml(textNode: SlateDescendant, html: string): string {
  let styledHtml = html
  const { underline } = textNode as StyledText
  if (underline)
    styledHtml = `<u data-value="${underline}" interpret-as="${styledHtml}">${styledHtml}</u>`
  return styledHtml
}

/**
 * style to html
 * @param textNode slate text node
 * @param textHtml text html
 * @returns styled html
 */
export function styleToHtml(textNode: SlateDescendant, textHtml: string): string {
  if (!SlateText.isText(textNode)) return textHtml
  if (isPlainText(textHtml)) {
    // textHtml 是纯文本，而不是 html tag
    return genStyledHtml(textNode, textHtml)
  }

  // textHtml 是 html tag
  const $text = $(textHtml)
  const tagName = getTagName($text)

  if (tagName === 'br') {
    return genStyledHtml(textNode, '<br>')
  }

  let innerHtml = $text.html()
  innerHtml = genStyledHtml(textNode, innerHtml)
  if (tagName === 'u') {
    return innerHtml
  }
  $text.html(innerHtml)
  return getOuterHTML($text)
}
