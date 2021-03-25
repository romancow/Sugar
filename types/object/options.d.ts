export type resolveFn<T> = (key: string, targetVal: T, sourceVal: T, target: Object, source: Object) => boolean
export type searchFn<T> = (key: string, val: T, obj: Object) => boolean
export type mapFn<T, U> = (val: T, key: string, obj: Object) => U

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

export interface ObjectMergeOptions<T> {
	deep?: boolean
	hidden?: boolean
	descriptor?: boolean
	resolve?: boolean|resolveFn<T>
}
