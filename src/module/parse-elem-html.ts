/**
 * @description parse elem html
 * @author emike
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { AttachmentElement, BreakElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const value = elem.getAttribute('data-value') || ''
  return {
    type: 'ice_break',
    value,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as BreakElement
}

function aparseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const link = elem.getAttribute('href') || ''
  const fileName = elem.getAttribute('download') || ''
  return {
    type: 'attachment',
    link,
    fileName,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as AttachmentElement
}

export const aparseHtmlConf = {
  selector: 'a[data-w-e-type="attachment"]',
  parseElemHtml: aparseHtml,
}

const parseHtmlConf = {
  selector: 'break[data-w-e-type="ice_break"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
