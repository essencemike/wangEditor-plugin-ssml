/**
 * @description attachment module entry
 * @author emike
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/editor'
import withSSML, { withAttachment } from './plugin'
import { renderBreakElem, renderParticipleElem, aconf } from './render-elem'
import { breakToHtmlConf, participleToHtmlConf, aconf as aaconf } from './elem-to-html'
import { parseBreakHtmlConf, parseParticipleHtmlConf, aparseHtmlConf } from './parse-elem-html'
import {
  breakMenuConf,
  participleMenuConf,
  polyphoneMenuConf,
  uploadAttachmentMenuConf,
} from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withSSML,
  renderElems: [renderBreakElem, renderParticipleElem, aconf],
  elemsToHtml: [breakToHtmlConf, participleToHtmlConf, aaconf],
  parseElemsHtml: [parseBreakHtmlConf, parseParticipleHtmlConf, aparseHtmlConf],
  menus: [breakMenuConf, participleMenuConf, polyphoneMenuConf, uploadAttachmentMenuConf],
}

export default module
