import type { SearchFn, MapFn, QueryStringOptions, MergeOptions } from './options'
import type { UnknownChainable, String, Number, Array } from '../namespaces'

export type ChainableWith<Raw, T> = T & Omit<Chainable<Raw>, keyof T>

export default interface Chainable<Raw extends Object> {
	raw: Raw
	valueOf: () => Raw
	toString: () => string
	toLocaleString(): String.Chainable

	add<T, S>(obj: Object, options?: MergeOptions<T, S>): Chainable<Object>
	addAll<T, S>(sources: Array<Object>, options?: MergeOptions<T, S>): Chainable<Object>
	average<T, U>(map?: string|MapFn<T, U>): Number.Chainable
	clone(deep?: boolean): Chainable<Raw>
	count<T>(search: T|SearchFn<T>): Number.Chainable
	defaults<T, S>(sources: Array<Object>, options?: MergeOptions<T, S>): Chainable<Object>
	every<T>(search: T|SearchFn<T>): Chainable<boolean>
	exclude<T>(search: T|SearchFn<T>): Chainable<Object>
	filter<T>(search: T|SearchFn<T>): Chainable<Object>
	find<T>(search: T|SearchFn<T>): String.Chainable
	forEach<T>(eachFn: (val: T, key: string, obj: Object) => void): Chainable<Raw>
	get<K extends keyof Raw>(key: K, inherited?: boolean): UnknownChainable<Raw[K]>
	has(key: string, inherited?: boolean): Chainable<boolean>
	intersect(obj: Object): Chainable<Object>
	invert(multi?: boolean): Chainable<Object>
	isArguments(): Chainable<boolean>
	isArray(): Chainable<boolean>
	isBoolean(): Chainable<boolean>
	isDate(): Chainable<boolean>
	isEmpty(): Chainable<boolean>
	isEqual(obj: Object): Chainable<boolean>
	isError(): Chainable<boolean>
	isFunction(): Chainable<boolean>
	isMap(): Chainable<boolean>
	isNumber(): Chainable<boolean>
	isObject(): Chainable<boolean>
	isRegExp(): Chainable<boolean>
	isSet(): Chainable<boolean>
	isString(): Chainable<boolean>
	keys(): Array.Chainable<keyof Raw>
	least<T, U>(all?: boolean, map?: string|MapFn<T, U>): UnknownChainable<keyof Raw> | Chainable<Object>
	least<T, U>(map?: string|MapFn<T, U>): UnknownChainable<keyof Raw>
	map<T, U>(map: string|MapFn<T, U>): Chainable<Object>
	max<T, U>(all?: boolean, map?: string|MapFn<T, U>): UnknownChainable<keyof Raw> | Chainable<Object>
	max<T, U>(map?: string|MapFn<T, U>): UnknownChainable<keyof Raw>
	median<T, U>(map?: string|MapFn<T, U>): Number.Chainable
	merge<T, S>(source: Object, options?: MergeOptions<T, S>): Chainable<Object>
	mergeAll<T, S>(sources: Array<Object>, options?: MergeOptions<T, S>): Chainable<Object>
	min<T, U>(all?: boolean, map?: string|MapFn<T, U>): UnknownChainable<keyof Raw> | Chainable<Object>
	min<T, U>(map?: string|MapFn<T, U>): UnknownChainable<keyof Raw>
	most<T, U>(all?: boolean, map?: string|MapFn<T, U>): UnknownChainable<keyof Raw> | Chainable<Object>
	most<T, U>(map?: string|MapFn<T, U>): UnknownChainable<keyof Raw>
	none<T>(search: T|SearchFn<T>): Chainable<boolean>
	reduce<T>(reduceFn: <K extends keyof Raw>(acc: T, val: Raw[K], key: K, obj: Raw) => T, init?: any): UnknownChainable<T>
	reject(find: string|RegExp|Array<string>|Object): Chainable<Object>
	remove<T>(search: T|SearchFn<T>): Chainable<Object>
	select(find: string|RegExp|Array<string>|Object): Chainable<Object>
	set<T>(key: string, val: T): Chainable<Object>
	size(): Number.Chainable
	some<T>(search: T|SearchFn<T>): Chainable<boolean>
	subtract(obj: Object): Chainable<Object>
	sum<T, U>(map?: string|MapFn<T, U>): Number.Chainable
	tap(tapFn: (obj: Raw) => void): Chainable<Raw>
	toQueryString<T>(options?: QueryStringOptions<T>): String.Chainable
	values(): Array.Chainable<Raw[keyof Raw]>
}
