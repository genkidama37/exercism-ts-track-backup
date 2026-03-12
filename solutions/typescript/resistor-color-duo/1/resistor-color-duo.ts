export function decodedValue(colorNames: string[]) {
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
  const COLOR_LIMIT = 2
  const max_color_count = Math.min(colorNames.length, COLOR_LIMIT)

  let colorValues: number[] = colorNames
    .filter((colorName, index) => index < max_color_count)
    .map((colorName, index) => COLORS.indexOf(colorNames[index]))
    .filter((colorValue) => colorValue > -1)

  return Number(colorValues.join(''))
}
