/**
 * @description elem to html test
 * @author emike
 */

import breakToHtmlConf from '../../src/modules/break/elem-to-html'
import { BreakElement } from '../../src/index'

describe('break elem-to-html', () => {
  const value = '2'
  const breakEle: BreakElement = {
    type: 'ice_break',
    value,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(breakToHtmlConf.type).toBe('ice_break')
  })

  it('elem to html', () => {
    const html = breakToHtmlConf.elemToHtml(breakEle, '')
    expect(html).toBe(
      `<break data-w-e-type="ice_break" data-value="${value}" time="${+value * 1000}ms" />`
    )
  })
})
