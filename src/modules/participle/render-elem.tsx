/**
 * @description render elem
 * @author emike
 */

import { jsx, h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { ParticipleElement } from './custom-types'

function renderParticiple(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  const isDisabled = editor.isDisabled()

  // 当前节点是否选中
  const selected = DomEditor.isNodeSelected(editor, elem)

  // 构建 vnode
  const { value = 'digits', text = '1' } = elem as ParticipleElement

  return (
    <span
      contentEditable="false"
      data-value={value}
      data-text={text}
      style={{ marginLeft: '3px', marginRight: '3px', borderBottom: '1px solid #FFB580' }}
    >
      {text}
    </span>
  )
}

const renderParticipleElem = {
  type: 'ice_participle', // 节点 type ，重要！！！
  renderElem: renderParticiple,
}

export default renderParticipleElem
