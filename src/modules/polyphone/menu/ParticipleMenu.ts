/**
 * @description break menu
 * @author emike
 */

import { DomEditor, IDomEditor, SlateRange, t, IDropPanelMenu } from '@wangeditor/editor'
import { READ_METHOD } from '../../../constants/icon-svg'
import { IceParticiple } from './config'
import $, { DOMElement, Dom7Array } from '../../../utils/dom'
import { ParticipleElement } from '../custom-types'
import { isAllLetterString, isAllNumString } from './helper'

class ParticipleMenu implements IDropPanelMenu {
  readonly title = '读法'
  readonly iconSvg = READ_METHOD
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
    if (selection == null) return true
    const text = editor.getSelectionText()
    if (!text) return true

    if (isAllLetterString(text) || isAllNumString(text)) return false

    return true
  }

  getPanelContentElem(editor: IDomEditor): DOMElement {
    const text = editor.getSelectionText()
    if (!text) return document.createElement('ul')

    if (this.$content == null) {
      // 第一次渲染
      const $content = $('<ul class="ice-panel-content-participle"></ul>')

      // 绑定事件（只在第一次绑定，不要重复绑定）
      $content.on('click', (e: Event) => {
        const { target } = e
        if (target == null) return
        e.preventDefault()

        // const { selection } = editor
        // if (selection == null) return

        const $li = $(target)
        const val = $li.attr('data-value')

        // 插入一个 带颜色的 /
        const node: ParticipleElement = {
          type: 'ice_participle',
          value: val,
          text,
          children: [{ text }],
        }

        editor.deleteFragment()
        editor.insertNode(node)
        editor.move(1)
      })

      this.$content = $content
    }

    const $content = this.$content
    if ($content == null) return document.createElement('ul')
    $content.empty() // 清空之后再重置内容

    // 获取菜单配置
    const participleConf = this.getMenuConfig(editor)
    const { participles = [] } = participleConf

    console.log(text)
    let menus = [...participles]
    if (isAllLetterString(text)) {
      menus = menus.filter(m => m.value === 'characters')
    } else if (isAllNumString(text)) {
      menus = menus.filter(m => m.value !== 'characters')
    } else {
      menus = []
    }

    // 根据菜单配置生成 panel content
    menus.forEach(({ label, value }) => {
      const $li = $(`<li data-value="${value}">${label}</li>`)
      $content.append($li)
    })

    return $content[0]
  }

  private getMenuConfig(editor: IDomEditor): IceParticiple {
    // 获取配置，见 `./config.js`
    return editor.getMenuConfig('xiaoice_participle') as IceParticiple
  }
}

export default ParticipleMenu
