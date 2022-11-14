/**
 * @description render text style
 * @author emike
 */

import { SlateDescendant } from '@wangeditor/editor'
import { jsx, VNode } from 'snabbdom'
import { StyledText } from './custom-types'

/**
 * 添加样式
 * @param node slate text
 * @param vnode vnode
 * @returns vnode
 */
export function renderStyle(node: SlateDescendant, vnode: VNode): VNode {
  const { underline } = node as StyledText
  const styleVnode: VNode = vnode

  // if (underline) {
  //   styleVnode = <u>{styleVnode}</u>
  // }

  return styleVnode
}
