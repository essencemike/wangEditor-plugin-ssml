/**
 * @description menu entry
 * @author emike
 */

import BreakMenu from './BreakMenu'
import { genBreakList } from './config'
import UploadAttachment from './UploadAttachment'
import DownloadAttachment from './DownloadAttachment'
import { genUploadAttachmentMenuConfig } from './config'

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

export const uploadAttachmentMenuConf = {
  key: 'uploadAttachment', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new UploadAttachment()
  },

  // 默认的菜单菜单配置，将存储在 editorConfig.MENU_CONF[key] 中
  // 创建编辑器时，可通过 editorConfig.MENU_CONF[key] = {...} 来修改
  config: genUploadAttachmentMenuConfig(),
}

export const downloadAttachmentMenuConf = {
  key: 'downloadAttachment', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new DownloadAttachment()
  },
}
