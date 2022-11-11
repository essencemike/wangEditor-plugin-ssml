/**
 * @description break element
 * @author emike
 */
import { SlateText } from '@wangeditor/editor'

type EmptyText = {
  text: ''
}

export type BreakElement = {
  type: 'ice_break'
  value: string
  children: EmptyText[]
}

export type BreakItem = {
  label: string
  value: number
}
