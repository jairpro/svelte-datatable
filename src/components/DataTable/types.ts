export type DatatableColumnFormatData = string

export type DatatableColumnData = {
  text: string
  format?: DatatableColumnFormatData
  compute?: (text: string) => string
}

export type DatatableColumnsData = Array<DatatableColumnData>

export type DatatableData = Array<any>

export type DatatableSumData = {
  active?: boolean
  text?: string
}

export type DatatableSumsData = Array<DatatableSumData>