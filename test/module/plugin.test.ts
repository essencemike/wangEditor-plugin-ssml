/**
 * @description plugin test
 * @author emike
 */

import createEditor from '../utils/create-editor'
import withBreak from '../../src/modules/break/plugin'
import { BreakElement } from '../../src/index'

describe('break plugin', () => {
  const editor = withBreak(createEditor())
  const elem: BreakElement = {
    type: 'ice_break',
    value: '2',
    children: [{ text: '' }],
  }

  it('isInline', () => {
    expect(editor.isInline(elem)).toBe(true)
  })

  it('isVoid', () => {
    expect(editor.isVoid(elem)).toBe(true)
  })
})
