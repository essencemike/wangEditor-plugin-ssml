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

import { renderStyle } from './render-style'
import { styleToHtml } from './style-to-html'
import { parseStyleHtml } from './parse-style-html'

const module: Partial<IModuleConf> = {
  // editorPlugin: withParticiple,
  renderStyle,
  styleToHtml,
  parseStyleHtml,
  // renderElems: [renderParticipleElem],
  // elemsToHtml: [participleToHtmlConf],
  // parseElemsHtml: [parseParticipleHtmlConf],
  menus: [participleMenuConf],
}

export default module
