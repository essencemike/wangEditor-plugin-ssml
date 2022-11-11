/**
 * @description menu config
 * @author emike
 */

import { IUploadConfig } from '@wangeditor/editor'
import { BreakItem } from '../custom-types'

export type IceBreak = {
  breaks: BreakItem[]
}

const breakList = [
  {
    label: '停顿1秒',
    value: 1,
  },
  {
    label: '停顿2秒',
    value: 2,
  },
  {
    label: '停顿3秒',
    value: 3,
  },
]

export function genBreakList(): BreakItem[] {
  return breakList
}
