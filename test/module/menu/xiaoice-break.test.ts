/**
 * @description upload attachment menu test
 * @author emike
 */

import { SlateEditor, IDomEditor } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import { BreakElement } from '../../../src/index'
import BreakMenu from '../../../src/module/menu/BreakMenu'
import withBreak from '../../../src/module/plugin'

describe('break menu', () => {
  const editor = withBreak(createEditor())
  const menu = new BreakMenu()

  function getStartLocation(editor: IDomEditor) {
    return SlateEditor.start(editor, [])
  }

  function genBreakElem() {
    const breakEle: BreakElement = {
      type: 'ice_break',
      value: '2',
      children: [{ text: '' }],
    }
    return breakEle
  }

  it('getValue', () => {
    expect(menu.getValue(editor)).toBe('')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  it('isDisabled', () => {
    // 选中空编辑器
    editor.select(getStartLocation(editor))
    expect(menu.isDisabled(editor)).toBeFalsy()

    // 选中 break 节点
    editor.insertNode(genBreakElem())
    editor.select({ path: [0, 1, 0], offset: 0 })
    expect(menu.isDisabled(editor)).toBeFalsy()
  })
})
