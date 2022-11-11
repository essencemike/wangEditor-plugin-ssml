/**
 * @description parse elem html
 * @author emike
 */

import { DOMElement } from '../../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { ParticipleElement } from './custom-types'

function parseParticipleHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const value = elem.getAttribute('data-value') || 'digits'
  const text = elem.getAttribute('data-text') || ''

  return {
    type: 'ice_participle',
    value,
    text,
    children: [{ text }],
  } as ParticipleElement
}

const parseParticipleHtmlConf = {
  selector: 'say-as[data-w-e-type="ice_participle"]',
  parseElemHtml: parseParticipleHtml,
}

export default parseParticipleHtmlConf
