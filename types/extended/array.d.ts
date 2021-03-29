import type { MapFn, SearchFn, SortMapFn } from '../array/options'

declare global {
	interface ArrayConstructor {
		construct<T>(n: number, indexMapFn: (i: number) => T): T[]
		create<T>(obj?: number|ArrayLike<T>, clone?: boolean): T[]
	}

	interface Array<T> {
		add(item: T|T[], index?: number): T[]
		append(item: T|T[], index?: number): T[]
		at(index: number|number[], loop?: boolean): T
		average<U>(map?: string|MapFn<T, U>): number
		clone(): T[]
		compact(all?: boolean): T[]
		count(search: T|SearchFn<T>, context?: any): number
		every(search: T|SearchFn<T>, context?: any): boolean
		everyFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		everyFromIndex(startIndex: number, ...args: any[]): T
		exclude(search: T|SearchFn<T>): T[]
		filter(search: T|SearchFn<T>, context?: any): T[]
		filterFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		filterFromIndex(startIndex: number, ...args: any[]): T
		find(search: T|SearchFn<T>, context?: any): T
		findFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		findFromIndex(startIndex: number, ...args: any[]): T
		findIndex(search: T|SearchFn<T>, context?: any): number
		findIndexFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		findIndexFromIndex(startIndex: number, ...args: any[]): T
		first(num?: number): T
		flatten(limit?: number): T[]
		forEachFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		forEachFromIndex(startIndex: number, ...args: any[]): T
		from(index: number): T[]
		groupBy<U>(map: string|MapFn<T, U>, groupFn?: (arr: T[], key: string, obj: Object) => void): Object
		inGroups(num: number, padding?: any): T[]
		inGroupsOf(num: number, padding?: any): T[]
		insert(item: T|T[], index?: number): T[]
		intersect(arr: T[]): T[]
		isEmpty(): boolean
		isEqual(arr: T[]): boolean
		last(num?: number): T
		least<U>(all?: boolean, map?: string|MapFn<T, U>): T[]
		least<U>(map?: string|MapFn<T, U>): T[]
		map<U>(map: string|MapFn<T, U>, context?: any): U[]
		mapFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		mapFromIndex(startIndex: number, ...args: any[]): T
		max<U>(all?: boolean, map?: string|MapFn<T, U>): T
		max<U>(map?: string|MapFn<T, U>): T
		median<U>(map?: string|MapFn<T, U>): number
		min<U>(all?: boolean, map?: string|MapFn<T, U>): T
		min<U>(map?: string|MapFn<T, U>): T
		most<U>(all?: boolean, map?: string|MapFn<T, U>): T[]
		most<U>(map?: string|MapFn<T, U>): T[]
		none(search: T|SearchFn<T>, context?: any): boolean
		reduceFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		reduceFromIndex(startIndex: number, ...args: any[]): T
		reduceRightFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		reduceRightFromIndex(startIndex: number, ...args: any[]): T
		remove(search: T|SearchFn<T>): T[]
		removeAt(start: number, end?: number): T[]
		sample(num?: number, remove?: boolean): T
		shuffle(): T[]
		some(search: T|SearchFn<T>, context?: any): boolean
		someFromIndex(startIndex: number, loop?: boolean, ...args: any[]): T
		someFromIndex(startIndex: number, ...args: any[]): T
		sortBy<U>(map?: string|SortMapFn<T, U>, desc?: boolean): T[]
		subtract(item: T|T[]): T[]
		sum<U>(map?: string|MapFn<T, U>): number
		to(index: number): T[]
		union(arr: T[]): T[]
		unique<U>(map?: string|MapFn<T, U>): T[]
		zip(...args: any[]): T[]
	}
}
