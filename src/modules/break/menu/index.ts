/**
 * @description menu entry
 * @author emike
 */

import BreakMenu from './BreakMenu'
import { genBreakList } from './config'

export const breakMenuConf = {
  key: 'xiaoice_break',
  factory() {
    return new BreakMenu()
  },

  // 默认的菜单菜单配置，将存储在 editorConfig.MENU_CONF[key] 中
  // 创建编辑器时，可通过 editorConfig.MENU_CONF[key] = {...} 来修改
  config: {
    breaks: genBreakList(),
  },
}
