import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'
import type { searchFn, mapFn, QueryStringParseOptions, QueryStringOptions, ObjectMergeOptions } from './options'

export default interface Constructor extends SugarNamespace {
	(raw?: Object): Chainable<Object>
	new(raw?: Object): Chainable<Object>
	fromQueryString<T, U>(str: string, options?: QueryStringParseOptions<T, U>): Object
	add<T>(instance: Object, obj: Object, options?: ObjectMergeOptions<T>): Object
	addAll<T>(instance: Object, sources: Array<Object>, options?: ObjectMergeOptions<T>): Object
	average<T, U>(instance: Object, map?: string|mapFn<T, U>): number
	clone(instance: Object, deep?: boolean): Object
	count<T>(instance: Object, search: T|searchFn<T>): number
	defaults<T>(instance: Object, sources: Array<Object>, options?: ObjectMergeOptions<T>): Object
	every<T>(instance: Object, search: T|searchFn<T>): boolean
	exclude<T>(instance: Object, search: T|searchFn<T>): Object
	filter<T>(instance: Object, search: T|searchFn<T>): T[]
	find<T>(instance: Object, search: T|searchFn<T>): boolean
	forEach<T>(instance: Object, eachFn: (val: T, key: string, obj: Object) => void): Object
	get<T>(instance: Object, key: string, inherited?: boolean): T
	has(instance: Object, key: string, inherited?: boolean): boolean
	intersect(instance: Object, obj: Object): Object
	invert(instance: Object, multi?: boolean): Object
	isArguments(instance: Object): boolean
	isArray(instance: any): instance is Array<any>
	isBoolean(instance: any): instance is boolean
	isDate(instance: any): instance is Date
	isEmpty(instance: Object): boolean
	isEqual(instance: Object, obj: Object): boolean
	isError(instance: any): instance is Error
	isFunction(instance: any): instance is Function
	isMap(instance: any): instance is Map<any, any>
	isNumber(instance: any): instance is number
	isObject(instance: Object): boolean
	isRegExp(instance: any): instance is RegExp
	isSet(instance: any): instance is Set<any>
	isString(instance: any): instance is string
	keys<T>(instance: Object): T[]
	least<T, U>(instance: Object, all?: boolean, map?: string|mapFn<T, U>): T
	least<T, U>(instance: Object, map?: string|mapFn<T, U>): T
	map<T, U>(instance: Object, map: string|mapFn<T, U>): Object
	max<T, U>(instance: Object, all?: boolean, map?: string|mapFn<T, U>): T
	max<T, U>(instance: Object, map?: string|mapFn<T, U>): T
	median<T, U>(instance: Object, map?: string|mapFn<T, U>): number
	merge<T>(instance: Object, source: Object, options?: ObjectMergeOptions<T>): Object
	mergeAll<T>(instance: Object, sources: Array<Object>, options?: ObjectMergeOptions<T>): Object
	min<T, U>(instance: Object, all?: boolean, map?: string|mapFn<T, U>): T
	min<T, U>(instance: Object, map?: string|mapFn<T, U>): T
	most<T, U>(instance: Object, all?: boolean, map?: string|mapFn<T, U>): T
	most<T, U>(instance: Object, map?: string|mapFn<T, U>): T
	none<T>(instance: Object, search: T|searchFn<T>): boolean
	reduce<T>(instance: Object, reduceFn: (acc: T, val: T, key: string, obj: Object) => void, init?: any): T
	reject(instance: Object, find: string|RegExp|Array<string>|Object): Object
	remove<T>(instance: Object, search: T|searchFn<T>): Object
	select(instance: Object, find: string|RegExp|Array<string>|Object): Object
	set<T>(instance: Object, key: string, val: T): Object
	size(instance: Object): number
	some<T>(instance: Object, search: T|searchFn<T>): boolean
	subtract(instance: Object, obj: Object): Object
	sum<T, U>(instance: Object, map?: string|mapFn<T, U>): number
	tap(instance: Object, tapFn: (obj: Object) => any): Object
	toQueryString<T, U>(instance: Object, options?: QueryStringOptions<T, U>): Object
	values<T>(instance: Object): T[]
}
