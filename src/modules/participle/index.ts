/**
 * @description attachment module entry
 * @author emike
 */

import { IModuleConf } from '@wangeditor/editor'
import withParticiple from './plugin'
import renderParticipleElem from './render-elem'
import participleToHtmlConf from './elem-to-html'
import parseParticipleHtmlConf from './parse-elem-html'
import { participleMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withParticiple,
  renderElems: [renderParticipleElem],
  elemsToHtml: [participleToHtmlConf],
  parseElemsHtml: [parseParticipleHtmlConf],
  menus: [participleMenuConf],
}

export default module
