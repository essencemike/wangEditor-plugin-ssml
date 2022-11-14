/**
 * @description break element
 * @author emike
 */
import { SlateText } from '@wangeditor/editor'

type EmptyText = {
  text: ''
}

export type ParticipleElement = {
  type: 'ice_participle'
  value: string
  text: string
  children: SlateText[]
}

export type StyledText = {
  text: string
  underline?: string
}
