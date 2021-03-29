import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'
import type { MapFn, SearchFn, SortMapFn, Options } from './options'

export default interface Constructor extends SugarNamespace {
	<T>(obj?: number | ArrayLike<T>, clone?: boolean): Chainable<T>
	new<T>(obj?: number|ArrayLike<T>, clone?: boolean): Chainable<T>
	construct<T>(n: number, indexMapFn: (i: number) => T): T[]
	create<T>(obj?: number|ArrayLike<T>, clone?: boolean): T[]
	add<T>(instance: T[], item: T|T[], index?: number): T[]
	append<T>(instance: T[], item: T|T[], index?: number): T[]
	at<T>(instance: T[], index: number|number[], loop?: boolean): T
	average<T, U>(instance: T[], map?: string|MapFn<T, U>): number
	clone<T>(instance: T[]): T[]
	compact<T>(instance: T[], all?: boolean): T[]
	count<T>(instance: T[], search: T|SearchFn<T>, context?: any): number
	every<T>(instance: T[], search: T|SearchFn<T>, context?: any): boolean
	everyFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	everyFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	exclude<T>(instance: T[], search: T|SearchFn<T>): T[]
	filter<T>(instance: T[], search: T|SearchFn<T>, context?: any): T[]
	filterFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	filterFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	find<T>(instance: T[], search: T|SearchFn<T>, context?: any): T
	findFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	findFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	findIndex<T>(instance: T[], search: T|SearchFn<T>, context?: any): number
	findIndexFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	findIndexFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	first<T>(instance: T[], num?: number): T
	flatten<T>(instance: T[], limit?: number): T[]
	forEachFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	forEachFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	from<T>(instance: T[], index: number): T[]
	groupBy<T, U>(instance: T[], map: string|MapFn<T, U>, groupFn?: (arr: T[], key: string, obj: Object) => void): Object
	inGroups<T>(instance: T[], num: number, padding?: any): T[]
	inGroupsOf<T>(instance: T[], num: number, padding?: any): T[]
	insert<T>(instance: T[], item: T|T[], index?: number): T[]
	intersect<T>(instance: T[], arr: T[]): T[]
	isEmpty<T>(instance: T[]): boolean
	isEqual<T>(instance: T[], arr: T[]): boolean
	last<T>(instance: T[], num?: number): T
	least<T, U>(instance: T[], all?: boolean, map?: string|MapFn<T, U>): T[]
	least<T, U>(instance: T[], map?: string|MapFn<T, U>): T[]
	map<T, U>(instance: T[], map: string|MapFn<T, U>, context?: any): U[]
	mapFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	mapFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	max<T, U>(instance: T[], all?: boolean, map?: string|MapFn<T, U>): T
	max<T, U>(instance: T[], map?: string|MapFn<T, U>): T
	median<T, U>(instance: T[], map?: string|MapFn<T, U>): number
	min<T, U>(instance: T[], all?: boolean, map?: string|MapFn<T, U>): T
	min<T, U>(instance: T[], map?: string|MapFn<T, U>): T
	most<T, U>(instance: T[], all?: boolean, map?: string|MapFn<T, U>): T[]
	most<T, U>(instance: T[], map?: string|MapFn<T, U>): T[]
	none<T>(instance: T[], search: T|SearchFn<T>, context?: any): boolean
	reduceFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	reduceFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	reduceRightFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	reduceRightFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	remove<T>(instance: T[], search: T|SearchFn<T>): T[]
	removeAt<T>(instance: T[], start: number, end?: number): T[]
	sample<T>(instance: T[], num?: number, remove?: boolean): T
	shuffle<T>(instance: T[]): T[]
	some<T>(instance: T[], search: T|SearchFn<T>, context?: any): boolean
	someFromIndex<T>(instance: T[], startIndex: number, loop?: boolean, ...args: any[]): T
	someFromIndex<T>(instance: T[], startIndex: number, ...args: any[]): T
	sortBy<T, U>(instance: T[], map?: string|SortMapFn<T, U>, desc?: boolean): T[]
	subtract<T>(instance: T[], item: T|T[]): T[]
	sum<T, U>(instance: T[], map?: string|MapFn<T, U>): number
	to<T>(instance: T[], index: number): T[]
	union<T>(instance: T[], arr: T[]): T[]
	unique<T, U>(instance: T[], map?: string|MapFn<T, U>): T[]
	zip<T>(instance: T[], ...args: any[]): T[]
	getOption<T>(name: string): T
	setOption(name: string, value: any): void
	setOption(options: Options): void
}
