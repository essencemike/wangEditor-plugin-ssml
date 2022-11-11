/**
 * @description render-elem test
 * @author emike
 */

import createEditor from '../utils/create-editor'
import renderBreakElem from '../../src/modules/break/render-elem'
import { BreakElement } from '../../src/index'

describe('break render-elem', () => {
  const editor = createEditor()

  const value = '2'
  const breakEle: BreakElement = {
    type: 'ice_break',
    value,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderBreakElem.type).toBe('ice_break')
  })

  it('render elem', () => {
    const vnode = renderBreakElem.renderElem(breakEle, null, editor) as any
    expect(vnode.sel).toBe('span')
    expect(vnode.data.props.contentEditable).toBe(false)
  })
})
