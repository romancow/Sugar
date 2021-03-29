export type MapFn<T, U> = (el: T, i: number, arr: T[]) => U
export type SortMapFn<T, U> = (el: T) => U
export type SearchFn<T> = (el: T, i: number, arr: T[]) => boolean

export interface Options {
	sortIgnore?: RegExp
	sortIgnoreCase?: boolean
	sortNatural?: boolean
	sortOrder?: string
	sortEquivalents?: Object
	sortCollate?: Function
}
