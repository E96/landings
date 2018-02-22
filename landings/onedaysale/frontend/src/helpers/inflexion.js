export const getDeclension = (count, values) => {
  const countRem10 = count % 10
  const countRem100 = count % 100
  if (countRem10 === 1 && countRem100 !== 11) return values[0]

  if (
    countRem10 >= 2 && countRem10 <= 4 &&
    !(countRem100 >=12 && countRem100 <= 14)
  ) return values[1]

  return values[2]
}
