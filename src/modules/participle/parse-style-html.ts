/**
 * @description parse style html
 * @author emike
 */

import { SlateDescendant, SlateText } from '@wangeditor/editor'
import { StyledText } from './custom-types'
import $, { Dom7Array, DOMElement } from '../../utils/dom'

/**
 * $text 是否匹配 tags
 * @param $text $text
 * @param selector selector 如 'b,strong' 或 'sub'
 */
function isMatch($text: Dom7Array, selector: string): boolean {
  if ($text.length === 0) return false

  if ($text[0].matches(selector)) return true

  if ($text.find(selector).length > 0) return true

  return false
}

export function parseStyleHtml(
  textElem: DOMElement,
  node: SlateDescendant,
  editor: any
): SlateDescendant {
  const $text = $(textElem)
  const value = textElem.getAttribute('data-value') || 'digits'

  if (!SlateText.isText(node)) return node

  const textNode = node as StyledText

  // underline
  if (isMatch($text, 'u')) {
    textNode.underline = value
  }

  return textNode
}
