/**
 * @description render elem
 * @author emike
 */

import { jsx, h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { BreakElement } from './custom-types'

function renderBreak(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  const isDisabled = editor.isDisabled()

  // 当前节点是否选中
  const selected = DomEditor.isNodeSelected(editor, elem)

  // 构建 vnode
  const { value = '1' } = elem as BreakElement
  const vnode = h(
    'span',
    {
      props: {
        contentEditable: false, // 不可编辑
      },
      style: {
        display: 'inline-block', // inline
        marginLeft: '3px',
        marginRight: '3px',
        color: '#73E5E5',
        fontWeight: '600',
        fontSize: '14px',
      },
      dataset: {
        value,
      },
    },
    '/'
  )

  return vnode
}

const renderBreakElem = {
  type: 'ice_break', // 节点 type ，重要！！！
  renderElem: renderBreak,
}

export default renderBreakElem
