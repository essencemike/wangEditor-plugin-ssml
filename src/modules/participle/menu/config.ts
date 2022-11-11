/**
 * @description menu config
 * @author emike
 */

type ParticipleItem = {
  label: string
  value: string
}

export type IceParticiple = {
  participles: ParticipleItem[]
}

const participleList = [
  { label: '读数字', value: 'digits' },
  { label: '读数值', value: 'cardinal' },
  { label: '读字母', value: 'characters' },
]

export function genParticipleList() {
  return participleList
}
