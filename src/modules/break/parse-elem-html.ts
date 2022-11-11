/**
 * @description parse elem html
 * @author emike
 */

import { DOMElement } from '../../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { BreakElement } from './custom-types'

function parseBreakHtml(
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

const parseBreakHtmlConf = {
  selector: 'break[data-w-e-type="ice_break"]',
  parseElemHtml: parseBreakHtml,
}

export default parseBreakHtmlConf
