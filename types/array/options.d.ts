export type MapFn<T, U, A extends readonly T[] = T[]> = (element: T, index: number, array: A) => U
export type SortMapFn<T, U> = (element: T) => U
export type SearchFn<T, A extends readonly T[] = T[]> = (element: T, index: number, array: A) => boolean

export interface Options {
	sortIgnore?: RegExp
	sortIgnoreCase?: boolean
	sortNatural?: boolean
	sortOrder?: string
	sortEquivalents?: { [char: string]: string | null } | null
	sortCollate?: <T>(a: T, b: T) => number
}
