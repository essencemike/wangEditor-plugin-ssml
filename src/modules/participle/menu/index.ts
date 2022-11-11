/**
 * @description menu entry
 * @author emike
 */

import { genParticipleList } from './config'
import ParticipleMenu from './ParticipleMenu'

export const participleMenuConf = {
  key: 'xiaoice_participle',
  factory() {
    return new ParticipleMenu()
  },

  // 默认的菜单菜单配置，将存储在 editorConfig.MENU_CONF[key] 中
  // 创建编辑器时，可通过 editorConfig.MENU_CONF[key] = {...} 来修改
  config: {
    participles: genParticipleList(),
  },
}
