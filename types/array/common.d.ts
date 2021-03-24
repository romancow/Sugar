export type mapFn<T, U> = (el: T, i: number, arr: T[]) => U
export type sortMapFn<T, U> = (el: T) => U
export type searchFn<T> = (el: T, i: number, arr: T[]) => boolean

export interface ArrayOptions {
	sortIgnore?: RegExp
	sortIgnoreCase?: boolean
	sortNatural?: boolean
	sortOrder?: string
	sortEquivalents?: Object
	sortCollate?: Function
}
