/**
 * @description attachment plugin
 * @author emike
 */

import { DomEditor, IDomEditor } from '@wangeditor/editor'

export function withAttachment<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'attachment') {
      return true
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'attachment') {
      return true
    }

    return isVoid(elem)
  }

  return newEditor
}

function withSSML<T extends IDomEditor>(editor: T) {
  const { isInline, isVoid } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'ice_break' || type === 'ice_participle') {
      return true
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem)
    if (type === 'ice_break') {
      return true
    }

    return isVoid(elem)
  }

  return newEditor
}

export default withSSML
