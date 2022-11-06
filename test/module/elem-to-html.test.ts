/**
 * @description elem to html test
 * @author emike
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { BreakElement } from '../../src/index'

describe('break elem-to-html', () => {
  const value = '2'
  const breakEle: BreakElement = {
    type: 'ice_break',
    value,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('ice_break')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(breakEle, '')
    expect(html).toBe(
      `<break data-w-e-type="ice_break" data-value="${value}" time="${+value * 1000}ms" />`
    )
  })
})
