/**
 * @description break menu
 * @author emike
 */

import { DomEditor, IDomEditor, SlateRange, t, IDropPanelMenu } from '@wangeditor/editor'
import { ATTACHMENT_SVG, BREAK_SVG } from '../../../constants/icon-svg'
import { IceBreak } from './config'
import $, { DOMElement, Dom7Array } from '../../../utils/dom'
import { BreakElement } from '../custom-types'

class BreakMenu implements IDropPanelMenu {
  readonly title = '停顿'
  readonly iconSvg = BREAK_SVG
  readonly tag = 'button'
  readonly showDropPanel = true
  private $content: Dom7Array | null = null

  getValue(editor: IDomEditor): string | boolean {
    // 无需获取 val
    return ''
  }

  isActive(editor: IDomEditor): boolean {
    // 任何时候，都不用激活 menu
    return false
  }

  exec(editor: IDomEditor, value: string | boolean) {}

  isDisabled(editor: IDomEditor): boolean {
    const { selection } = editor
    if (selection == null) return false
    const text = editor.getSelectionText()
    if (text) return true

    return false
  }

  getPanelContentElem(editor: IDomEditor): DOMElement {
    if (this.$content == null) {
      // 第一次渲染
      const $content = $('<ul class="ice-panel-content-break"></ul>')

      // 绑定事件（只在第一次绑定，不要重复绑定）
      $content.on('click', (e: Event) => {
        const { target } = e
        if (target == null) return
        e.preventDefault()

        // const { selection } = editor
        // if (selection == null) return

        const $li = $(target)
        const val = $li.attr('data-value')
        const label = $li.text()

        // 插入一个 带颜色的 /
        const node: BreakElement = {
          type: 'ice_break',
          value: val,
          children: [{ text: '' }],
        }
        editor.insertNode(node)
        editor.move(1)
      })

      this.$content = $content
    }

    const $content = this.$content
    if ($content == null) return document.createElement('ul')
    $content.empty() // 清空之后再重置内容

    // 当前选中文本的颜色之
    const selectedColor = this.getValue(editor)

    // 获取菜单配置
    const breakConf = this.getMenuConfig(editor)
    const { breaks = [] } = breakConf
    // 根据菜单配置生成 panel content
    breaks.forEach(({ label, value }) => {
      const $li = $(`<li data-value="${value}">${label}</li>`)
      $content.append($li)
    })

    return $content[0]
  }

  private getMenuConfig(editor: IDomEditor): IceBreak {
    // 获取配置，见 `./config.js`
    return editor.getMenuConfig('xiaoice_break') as IceBreak
  }
}

export default BreakMenu
