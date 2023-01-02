export const _renderNumeric = (value, maxFragtionDigits = 0) => {
  let number = Number(value)
  return number?.toLocaleString('id-ID', {
      maximumFractionDigits: maxFragtionDigits,
      minimumFractionDigits: 0
  })
}
