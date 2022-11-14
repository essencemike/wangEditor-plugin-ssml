import { CustomTypes } from '@wangeditor/editor'
import { StyledText } from './modules/participle/custom-types'

type CustomText = StyledText

declare module '@wangeditor/editor' {
  interface CustomTypes {
    Text: CustomText
  }
}
