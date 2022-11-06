/**
 * @description attachment module entry
 * @author emike
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/editor'
import withBreak, { withAttachment } from './plugin'
import renderElemConf, { aconf } from './render-elem'
import breakToHtmlConf, { aconf as aaconf } from './elem-to-html'
import breakParseHtmlConf, { aparseHtmlConf } from './parse-elem-html'
import { breakMenuConf, uploadAttachmentMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withBreak,
  renderElems: [renderElemConf, aconf],
  elemsToHtml: [breakToHtmlConf, aaconf],
  parseElemsHtml: [breakParseHtmlConf, aparseHtmlConf],
  menus: [breakMenuConf, uploadAttachmentMenuConf],
}

export default module
