import type { ChainableWith } from '../object/chainable'
import type { MapFn, SearchFn, SortMapFn } from './options'
import type { UnknownChainable, Number, Object, String } from '../namespaces'

type Chainable<T, Raw extends T[] = T[]> = ChainableWith<Raw, {
	add(item: T|T[], index?: number): Chainable<T>
	append(item: T|T[], index?: number): Chainable<T, Raw>
	at(index: number|number[], loop?: boolean): UnknownChainable<T>
	average<U>(map?: string|MapFn<T, U>): Number.Chainable
	clone(): Chainable<T>
	compact(all?: boolean): Chainable<T, Raw>
	count(search: T|SearchFn<T>, context?: any): Number.Chainable
	every(search: T|SearchFn<T>, context?: any): Object.Chainable<boolean>
	everyFromIndex(startIndex: number, loop?: boolean, ...args: any[]): Object.Chainable<boolean>
	everyFromIndex(startIndex: number, ...args: any[]): Object.Chainable<boolean>
	exclude(search: T|SearchFn<T>): Chainable<T>
	filter(search: T|SearchFn<T>, context?: any): Chainable<T>
	filterFromIndex(startIndex: number, loop?: boolean, ...args: any[]): Chainable<T>
	filterFromIndex(startIndex: number, ...args: any[]): Chainable<T>
	find(search: T|SearchFn<T>, context?: any): UnknownChainable<T>
	findFromIndex(startIndex: number, loop?: boolean, ...args: any[]): UnknownChainable<T>
	findFromIndex(startIndex: number, ...args: any[]): UnknownChainable<T>
	findIndex(search: T|SearchFn<T>, context?: any): Number.Chainable
	findIndexFromIndex(startIndex: number, loop?: boolean, ...args: any[]): Number.Chainable
	findIndexFromIndex(startIndex: number, ...args: any[]): Number.Chainable
	first(num?: number): Chainable<T>
	flatten(limit?: number): Chainable<T>
	forEachFromIndex(startIndex: number, loop?: boolean, ...args: any[]): Object.Chainable<undefined>
	forEachFromIndex(startIndex: number, ...args: any[]): Object.Chainable<undefined>
	from(index: number): Chainable<T>
	groupBy<U>(map: string|MapFn<T, U>, groupFn?: (arr: T[], key: string, obj: Object) => void): Object.Chainable<{U: T[]}>
	inGroups(num: number, padding?: any): Chainable<T[]>
	inGroupsOf(num: number, padding?: any): Chainable<T[]>
	insert(item: T|T[], index?: number): Chainable<T, Raw>
	intersect(arr: T[]): Chainable<T>
	isEmpty(): Object.Chainable<boolean>
	isEqual(arr: T[]): Object.Chainable<boolean>
	last(num?: number): Chainable<T>
	least<U>(all?: boolean, map?: string|MapFn<T, U>): Chainable<T> | UnknownChainable<T>
	least<U>(map?: string|MapFn<T, U>): UnknownChainable<T>
	map<U>(map: string|MapFn<T, U>, context?: any): Chainable<U>
	mapFromIndex<U>(startIndex: number, loop?: boolean, ...args: any[]): Chainable<U>
	mapFromIndex<U>(startIndex: number, ...args: any[]): Chainable<U>
	max<U>(all?: boolean, map?: string|MapFn<T, U>): Chainable<T> | UnknownChainable<T>
	max<U>(map?: string|MapFn<T, U>): UnknownChainable<T>
	median<U>(map?: string|MapFn<T, U>): Number.Chainable
	min<U>(all?: boolean, map?: string|MapFn<T, U>): Chainable<T> | UnknownChainable<T>
	min<U>(map?: string|MapFn<T, U>): UnknownChainable<T>
	most<U>(all?: boolean, map?: string|MapFn<T, U>): Chainable<T> | UnknownChainable<T>
	most<U>(map?: string|MapFn<T, U>): UnknownChainable<T>
	none(search: T|SearchFn<T>, context?: any): Object.Chainable<boolean>
	reduceFromIndex<U>(startIndex: number, loop?: boolean, ...args: any[]): UnknownChainable<U>
	reduceFromIndex<U>(startIndex: number, ...args: any[]): UnknownChainable<U>
	reduceRightFromIndex<U>(startIndex: number, loop?: boolean, ...args: any[]): UnknownChainable<U>
	reduceRightFromIndex<U>(startIndex: number, ...args: any[]): UnknownChainable<U>
	remove(search: T|SearchFn<T>): Chainable<T, Raw>
	removeAt(start: number, end?: number): Chainable<T, Raw>
	sample(num?: number, remove?: boolean): UnknownChainable<T> | Chainable<T>
	shuffle(): Chainable<T>
	some(search: T|SearchFn<T>, context?: any): Object.Chainable<boolean>
	someFromIndex(startIndex: number, loop?: boolean, ...args: any[]): Object.Chainable<boolean>
	someFromIndex(startIndex: number, ...args: any[]): Object.Chainable<boolean>
	sortBy<U>(map?: string|SortMapFn<T, U>, desc?: boolean): Chainable<T, Raw>
	subtract(item: T|T[]): Chainable<T>
	sum<U>(map?: string|MapFn<T, U>): Number.Chainable
	to(index: number): Chainable<T>
	union(arr: T[]): Chainable<T>
	unique<U>(map?: string|MapFn<T, U>): Chainable<T>
	zip(...args: any[]): Chainable<T[]>

	concat(...items: (T | T[])[]): Chainable<T>
	concat(...items: T[][]): Chainable<T>
	copyWithin(target: number, start: number, end?: number): Chainable<T, Raw>
	every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): Object.Chainable<boolean>
	fill(value: T, start?: number, end?: number): Chainable<T, Raw>
	filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): Chainable<T>
	find(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): UnknownChainable<T | undefined>
	findIndex(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): Number.Chainable
	forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): Object.Chainable<undefined>
	indexOf(searchElement: T, fromIndex?: number): Number.Chainable
	join(separator?: string): String.Chainable
	lastIndexOf(searchElement: T, fromIndex?: number): Number.Chainable
	map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): Chainable<U>
	pop(): UnknownChainable<T | undefined>
	push(...items: T[]): Number.Chainable
	reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): UnknownChainable<T>
	reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): UnknownChainable<U>
	reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): UnknownChainable<T>
	reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): UnknownChainable<U>
	reverse(): Chainable<T, Raw>
	shift(): UnknownChainable<T | undefined>
	slice(start?: number, end?: number): Chainable<T>
	some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): Object.Chainable<boolean>
	sort(compareFn?: (a: T, b: T) => number): Chainable<T, Raw>
	splice(start: number): Chainable<T>
	splice(start: number, deleteCount: number, ...items: T[]): Chainable<T>
	unshift(...items: T[]): Number.Chainable
}>
export default Chainable
