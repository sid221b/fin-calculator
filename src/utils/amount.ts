export const formatWithComma = (val: number, local = 'IN') => {
  if (local !== 'IN') {
    return (val || '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const [x, y] = val.toString().split('.')

  let lastThree = x.substring(x.length - 3)
  const otherNumbers = x.substring(0, x.length - 3)
  if (otherNumbers !== '') lastThree = ',' + lastThree
  const res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') +
    lastThree +
    (y ? y : '')
  return res
}

export const formatAmount = (val: number) => {
  if (!val) return ''
  return `₹ ${formatWithComma(val)}`
}

export const removeSymbolsFromAmount = (str: string) => {
  return str ? (str || '').replace(/[^\d.-]/g, '') : str
}
