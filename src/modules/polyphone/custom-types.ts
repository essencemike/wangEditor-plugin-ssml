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

export type ParticipleElement = {
  type: 'ice_participle'
  value: string
  text: string
  children: SlateText[]
}

export type StyledText = {
  text: string
  underline?: boolean
  color?: string
}

export type BreakItem = {
  label: string
  value: number
}

export type AttachmentElement = {
  type: 'attachment'
  fileName: string
  link: string
  children: EmptyText[]
}
