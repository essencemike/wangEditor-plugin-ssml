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
import module from '../src/index'

Boot.registerModule(module)

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
  config: editorConfig,
  html: '<p>hello world<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="https://pan.baidu.com/" download="附件文件名">附件文件名</a></p><p> <a href="http://localhost:8000/" target="_blank">http://localhost:8000/</a> </p><p>选一个视频文件，作为附件上传： </p><break data-w-e-type="ice_break" data-w-e-is-void data-w-e-is-inline data-value="2" time="2000ms"/>',
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {
    toolbarKeys: [],
    insertKeys: {
      index: 0,
      keys: ['xiaoice_break', 'uploadAttachment'], // “上传附件”菜单
    },
  },
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
