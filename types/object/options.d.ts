import type Sugar from '../sugar'

export type ResolveFn<T, S> = <K extends keyof (T | S)>(key: K, targetVal: T[K], sourceVal: S[K], target: T, source: S) => any | undefined | Sugar
export type SearchFn<T> = <K extends keyof T>(val: T[K], key: K, obj: T) => boolean
export type MapFn<T, U> = <K extends keyof T>(val: T[K], key: K, obj: T) => U

export interface QueryStringParseOptions<T extends Object> {
	deep?: boolean
	auto?: boolean
	transform?: <K extends keyof T>(value: string, key: K, obj: Partial<T>) => T[K] | undefined
	separator?: string
}

export interface QueryStringOptions<T extends Object> {
	deep?: boolean
	prefix?: string
	transform?: <K extends keyof T>(val: T[K], key: K, obj: T) => any
	separator?: string
}

export interface MergeOptions<T extends Object, S extends Object> {
	deep?: boolean
	hidden?: boolean
	descriptor?: boolean
	resolve?: boolean | ResolveFn<T, S>
}
