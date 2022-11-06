/**
 * @description parse elem html test
 * @author emike
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { BreakElement } from '../../src/index'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('break[data-w-e-type="ice_break"]')
  })

  it('parse html', () => {
    const value = '2'
    // elem-to-html 产出的 html 格式： <a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline href="${link}" download="${fileName}">${fileName}</a>
    const elem = document.createElement('break')
    elem.setAttribute('data-w-e-type', 'ice_break')
    elem.setAttribute('data-value', value)

    const iceBreak = parseHtmlConf.parseElemHtml(elem, [], editor) as BreakElement
    expect(iceBreak.type).toBe('ice_break')
    expect(iceBreak.value).toBe(value)
  })
})
