/**
 * @description attachment module entry
 * @author emike
 */

import { IModuleConf } from '@wangeditor/editor'
import withBreak from './plugin'
import renderBreakElem from './render-elem'
import breakToHtmlConf from './elem-to-html'
import parseBreakHtmlConf from './parse-elem-html'
import { breakMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withBreak,
  renderElems: [renderBreakElem],
  elemsToHtml: [breakToHtmlConf],
  parseElemsHtml: [parseBreakHtmlConf],
  menus: [breakMenuConf],
}

export default module
