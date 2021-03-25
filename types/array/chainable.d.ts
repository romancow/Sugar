import type ObjectChainable from '../object/chainable'
import type { mapFn, searchFn, sortMapFn } from './options'
import type { SugarDefaultChainable } from '../sugar'

export interface ChainableBase<T, RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	add(item: T|T[], index?: number): SugarDefaultChainable<T[]>
	append(item: T|T[], index?: number): SugarDefaultChainable<T[]>
	at(index: number|number[], loop?: boolean): SugarDefaultChainable<T>
	average<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>
	clone(): SugarDefaultChainable<T[]>
	compact(all?: boolean): SugarDefaultChainable<T[]>
	count(search: T|searchFn<T>, context?: any): SugarDefaultChainable<number>
	every(search: T|searchFn<T>, context?: any): SugarDefaultChainable<boolean>
	everyFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	everyFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	exclude(search: T|searchFn<T>): SugarDefaultChainable<T[]>
	filter(search: T|searchFn<T>, context?: any): SugarDefaultChainable<T[]>
	filterFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	filterFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	find(search: T|searchFn<T>, context?: any): SugarDefaultChainable<T>
	findFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	findFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	findIndex(search: T|searchFn<T>, context?: any): SugarDefaultChainable<number>
	findIndexFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	findIndexFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	first(num?: number): SugarDefaultChainable<T>
	flatten(limit?: number): SugarDefaultChainable<T[]>
	forEachFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	forEachFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	from(index: number): SugarDefaultChainable<T[]>
	groupBy<U>(map: string|mapFn<T, U>, groupFn?: (arr: T[], key: string, obj: Object) => SugarDefaultChainable<void>): SugarDefaultChainable<Object>
	inGroups(num: number, padding?: any): SugarDefaultChainable<T[]>
	inGroupsOf(num: number, padding?: any): SugarDefaultChainable<T[]>
	insert(item: T|T[], index?: number): SugarDefaultChainable<T[]>
	intersect(arr: T[]): SugarDefaultChainable<T[]>
	isEmpty(): SugarDefaultChainable<boolean>
	isEqual(arr: T[]): SugarDefaultChainable<boolean>
	last(num?: number): SugarDefaultChainable<T>
	least<U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T[]>
	least<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T[]>
	map<U>(map: string|mapFn<T, U>, context?: any): SugarDefaultChainable<U[]>
	mapFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	mapFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	max<U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>
	max<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>
	median<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>
	min<U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>
	min<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>
	most<U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T[]>
	most<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T[]>
	none(search: T|searchFn<T>, context?: any): SugarDefaultChainable<boolean>
	reduceFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	reduceFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	reduceRightFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	reduceRightFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	remove(search: T|searchFn<T>): SugarDefaultChainable<T[]>
	removeAt(start: number, end?: number): SugarDefaultChainable<T[]>
	sample(num?: number, remove?: boolean): SugarDefaultChainable<T>
	shuffle(): SugarDefaultChainable<T[]>
	some(search: T|searchFn<T>, context?: any): SugarDefaultChainable<boolean>
	someFromIndex(startIndex: number, loop?: boolean, ...args: any[]): SugarDefaultChainable<T>
	someFromIndex(startIndex: number, ...args: any[]): SugarDefaultChainable<T>
	sortBy<U>(map?: string|sortMapFn<T, U>, desc?: boolean): SugarDefaultChainable<T[]>
	subtract(item: T|T[]): SugarDefaultChainable<T[]>
	sum<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>
	to(index: number): SugarDefaultChainable<T[]>
	union(arr: T[]): SugarDefaultChainable<T[]>
	unique<U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T[]>
	zip(...args: any[]): SugarDefaultChainable<T[]>
	concat(...items: (T | T[])[]): SugarDefaultChainable<T[]>
	concat(...items: T[][]): SugarDefaultChainable<T[]>
	copyWithin(target: number, start: number, end?: number): SugarDefaultChainable<this>
	every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): SugarDefaultChainable<boolean>
	fill(value: T, start?: number, end?: number): SugarDefaultChainable<this>
	filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): SugarDefaultChainable<T[]>
	find(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): SugarDefaultChainable<T | undefined>
	findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): SugarDefaultChainable<number>
	forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): SugarDefaultChainable<void>
	indexOf(searchElement: T, fromIndex?: number): SugarDefaultChainable<number>
	join(separator?: string): SugarDefaultChainable<string>
	lastIndexOf(searchElement: T, fromIndex?: number): SugarDefaultChainable<number>
	map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): SugarDefaultChainable<U[]>
	pop(): SugarDefaultChainable<T | undefined>
	push(...items: T[]): SugarDefaultChainable<number>
	reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): SugarDefaultChainable<T>
	reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): SugarDefaultChainable<U>
	reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): SugarDefaultChainable<T>
	reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): SugarDefaultChainable<U>
	reverse(): SugarDefaultChainable<T[]>
	shift(): SugarDefaultChainable<T | undefined>
	slice(start?: number, end?: number): SugarDefaultChainable<T[]>
	some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): SugarDefaultChainable<boolean>
	sort(compareFn?: (a: T, b: T) => number): SugarDefaultChainable<this>
	splice(start: number): SugarDefaultChainable<T[]>
	splice(start: number, deleteCount: number, ...items: T[]): SugarDefaultChainable<T[]>
	toLocaleString(): SugarDefaultChainable<string>
	unshift(...items: T[]): SugarDefaultChainable<number>
}

type Chainable<T, RawValue> = ChainableBase<T, RawValue> & ObjectChainable<RawValue>

export default Chainable
