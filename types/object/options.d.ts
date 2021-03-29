export type ResolveFn<T> = (key: string, targetVal: T, sourceVal: T, target: Object, source: Object) => boolean
export type SearchFn<T> = (key: string, val: T, obj: Object) => boolean
export type MapFn<T, U> = (val: T, key: string, obj: Object) => U

export interface QueryStringParseOptions<T, U> {
	deep?: boolean
	auto?: boolean
	transform?: (key: string, val: T, obj: Object) => U
	separator?: string
}

export interface QueryStringOptions<T, U> {
	deep?: boolean
	prefix?: string
	transform?: (key: string, val: T, obj: Object) => U
	separator?: string
}

export interface MergeOptions<T> {
	deep?: boolean
	hidden?: boolean
	descriptor?: boolean
	resolve?: boolean | ResolveFn<T>
}
