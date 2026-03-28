const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export function decodedValue([band1, band2]: string[]): number {
  const tens = COLORS.indexOf(band1) * 10
  const ones = COLORS.indexOf(band2)

  return tens + ones
}
