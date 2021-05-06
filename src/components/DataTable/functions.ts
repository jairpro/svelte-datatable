import type { DatatableColumnsData, DatatableSumData, DatatableData } from "./types"

export const formatToLocaleNumber = (text: string) => (Number(text).toLocaleString('pt-br', {
  minimumFractionDigits: 2
})) 

type GetCellArgs = {
  cell: any
  index: number
  columns: DatatableColumnsData
}

/** Retorna o valor computado de uma célula Datatable */
export function getCell(data: GetCellArgs): string {
  const { index, cell, columns } = data
  const column = columns[index]

  let text = cell

  if (column.format === ';') {
    text = formatToLocaleNumber(text)
  }

  if (column.compute) {
    text = column.compute(text)
  }
  return text
}

type GetSumArgs = {
  sum: DatatableSumData
  index: number
  data: DatatableData
  columns: DatatableColumnsData
}

/** Retorna o valor computado uma coluna Datatable na linha de cálculo */
export function getSum(args: GetSumArgs): string {
  const { sum, data, index, columns } = args
  if (sum.active) {
    let value = 0;
    data.map(item => value += item[index])
    return getCell({ cell: value, index, columns });
  }
  else if (sum.text) return sum.text
  return ''
}
