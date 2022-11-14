/**
 * @description examples entry
 * @author emike
 */

import {
  createEditor,
  createToolbar,
  Boot,
  IEditorConfig,
  i18nChangeLanguage,
} from '@wangeditor/editor'
import { breakModule, participleModule } from '../src/index'

Boot.registerModule(breakModule)
Boot.registerModule(participleModule)

// i18nChangeLanguage('en')

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  onChange(editor) {
    const html = editor.getHtml()
    // @ts-ignore
    document.getElementById('text-html').value = html
    const contentStr = JSON.stringify(editor.children, null, 2)
    // @ts-ignore
    document.getElementById('text-json').value = contentStr
  },
  hoverbarKeys: {
    attachment: {
      menuKeys: [], // “下载附件”菜单
    },
  },
  MENU_CONF: {
    xiaoice_break: {},
  },
}

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  mode: 'simple',
  config: editorConfig,
  html: `<p>hello <u data-value="characters" interpret-as="world">world</u> <break data-w-e-type="ice_break" data-value="2" time="2000ms" />
  </p>`,
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {
    toolbarKeys: [],
    insertKeys: {
      index: 0,
      keys: ['xiaoice_participle', 'xiaoice_break'], // “上传附件”菜单
    },
  },
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
