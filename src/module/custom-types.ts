/**
 * @description break element
 * @author emike
 */

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

export type AttachmentElement = {
  type: 'attachment'
  fileName: string
  link: string
  children: EmptyText[]
}
