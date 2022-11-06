import '@testing-library/jest-dom'

// @ts-ignore
global.crypto = {
  getRandomValues: function (buffer: any) {
    return ''
  },
}
