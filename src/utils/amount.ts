import { ToWords } from 'to-words'
const toWords = new ToWords()

export const formatWithComma = (val: number, local = 'IN') => {
  if (local !== 'IN') {
    return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const [x, y] = String(val).split('.')

  let lastThree = x.substring(x.length - 3)
  const otherNumbers = x.substring(0, x.length - 3)
  if (otherNumbers !== '') lastThree = ',' + lastThree
  const res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
    lastThree +
    (String(val).includes('.') ? `.${y}` : '')
  return res
}

export const formatAmount = (val: any) => {
  if (!val) return ''
  return `₹ ${formatWithComma(val)}`
}

export const removeSymbolsFromAmount = (str: string) => {
  return str ? (str || '').replace(/[^\d.-]/g, '') : str
}

export const numberToLocalText = (num: string | number | undefined, round = false): string => {
  // const money = round && String(num).split('.')[0].length > 8 ? String(num).split('.')[0] : num
  if (!num || isNaN(Number(num))) return ''
  num = Number(num)
  if (num < 1) {
    return toWords.convert(num, { currency: true, ignoreZeroCurrency: true })
  }
  if (num < 100) {
    return toWords.convert(num, { currency: true, ignoreDecimal: false })
  }
  return toWords.convert(num, { currency: false, ignoreDecimal: true })
}
