import type ObjectChainable from '../object/chainable'
import type { replaceFn } from './common'
import type { SugarDefaultChainable } from '../sugar'

type Chainable<RawValue> = ChainableBase<RawValue> & ObjectChainable<RawValue>

export default Chainable

export interface ChainableBase<RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	at<T>(index: number|Array<number>, loop?: boolean): SugarDefaultChainable<T>
	camelize(upper?: boolean): SugarDefaultChainable<string>
	capitalize(lower?: boolean, all?: boolean): SugarDefaultChainable<string>
	chars<T>(eachCharFn?: (char: string, i: number, arr: Array<string>) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	codes<T>(eachCodeFn?: (code: number, i: number, str: string) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	compact(): SugarDefaultChainable<string>
	dasherize(): SugarDefaultChainable<string>
	decodeBase64(): SugarDefaultChainable<string>
	encodeBase64(): SugarDefaultChainable<string>
	escapeHTML(): SugarDefaultChainable<string>
	escapeURL(param?: boolean): SugarDefaultChainable<string>
	first(n?: number): SugarDefaultChainable<string>
	forEach<T>(search?: string|RegExp, eachFn?: (match: string, i: number, arr: Array<string>) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	forEach<T>(eachFn: (match: string, i: number, arr: Array<string>) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	format(...args: any[]): SugarDefaultChainable<string>
	from(index?: number): SugarDefaultChainable<string>
	insert(str: string, index?: number): SugarDefaultChainable<string>
	isBlank(): SugarDefaultChainable<boolean>
	isEmpty(): SugarDefaultChainable<boolean>
	last(n?: number): SugarDefaultChainable<string>
	lines<T>(eachLineFn?: (line: string, i: number, arr: Array<string>) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	pad(num: number, padding?: string): SugarDefaultChainable<string>
	padLeft(num: number, padding?: string): SugarDefaultChainable<string>
	padRight(num: number, padding?: string): SugarDefaultChainable<string>
	parameterize(): SugarDefaultChainable<string>
	remove(f: string|RegExp): SugarDefaultChainable<string>
	removeAll(f: string|RegExp): SugarDefaultChainable<string>
	removeTags(tag?: string, replace?: string|replaceFn): SugarDefaultChainable<string>
	replaceAll(f: string|RegExp, ...args: any[]): SugarDefaultChainable<string>
	reverse(): SugarDefaultChainable<string>
	shift<T>(n: number): SugarDefaultChainable<T[]>
	spacify(): SugarDefaultChainable<string>
	stripTags(tag?: string, replace?: string|replaceFn): SugarDefaultChainable<string>
	titleize(): SugarDefaultChainable<string>
	to(index?: number): SugarDefaultChainable<string>
	toNumber(base?: number): SugarDefaultChainable<number>
	trimLeft(): SugarDefaultChainable<string>
	trimRight(): SugarDefaultChainable<string>
	truncate(length: number, from?: string, ellipsis?: string): SugarDefaultChainable<string>
	truncateOnWord(length: number, from?: string, ellipsis?: string): SugarDefaultChainable<string>
	underscore(): SugarDefaultChainable<string>
	unescapeHTML(): SugarDefaultChainable<string>
	unescapeURL(partial?: boolean): SugarDefaultChainable<string>
	words<T>(eachWordFn?: (word: string, i: number, arr: Array<string>) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	anchor(name: string): SugarDefaultChainable<string>
	big(): SugarDefaultChainable<string>
	blink(): SugarDefaultChainable<string>
	bold(): SugarDefaultChainable<string>
	charAt(pos: number): SugarDefaultChainable<string>
	charCodeAt(index: number): SugarDefaultChainable<number>
	codePointAt(pos: number): SugarDefaultChainable<number | undefined>
	concat(...strings: string[]): SugarDefaultChainable<string>
	endsWith(searchString: string, endPosition?: number): SugarDefaultChainable<boolean>
	fixed(): SugarDefaultChainable<string>
	fontcolor(color: string): SugarDefaultChainable<string>
	fontsize(size: number): SugarDefaultChainable<string>
	fontsize(size: string): SugarDefaultChainable<string>
	includes(searchString: string, position?: number): SugarDefaultChainable<boolean>
	indexOf(searchString: string, position?: number): SugarDefaultChainable<number>
	italics(): SugarDefaultChainable<string>
	lastIndexOf(searchString: string, position?: number): SugarDefaultChainable<number>
	link(url: string): SugarDefaultChainable<string>
	localeCompare(that: string): SugarDefaultChainable<number>
	localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): SugarDefaultChainable<number>
	match(regexp: RegExp): SugarDefaultChainable<RegExpMatchArray | null>
	match(regexp: string): SugarDefaultChainable<RegExpMatchArray | null>
	normalize(form?: string): SugarDefaultChainable<string>
	normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): SugarDefaultChainable<string>
	repeat(count: number): SugarDefaultChainable<string>
	replace(searchValue: string, replaceValue: string): SugarDefaultChainable<string>
	replace(searchValue: string, replacer: (substring: string, ...args: any[]) => string): SugarDefaultChainable<string>
	replace(searchValue: RegExp, replaceValue: string): SugarDefaultChainable<string>
	replace(searchValue: RegExp, replacer: (substring: string, ...args: any[]) => string): SugarDefaultChainable<string>
	search(regexp: RegExp): SugarDefaultChainable<number>
	search(regexp: string): SugarDefaultChainable<number>
	slice(start?: number, end?: number): SugarDefaultChainable<string>
	small(): SugarDefaultChainable<string>
	split(separator: string, limit?: number): SugarDefaultChainable<string[]>
	split(separator: RegExp, limit?: number): SugarDefaultChainable<string[]>
	startsWith(searchString: string, position?: number): SugarDefaultChainable<boolean>
	strike(): SugarDefaultChainable<string>
	sub(): SugarDefaultChainable<string>
	substr(from: number, length?: number): SugarDefaultChainable<string>
	substring(start: number, end?: number): SugarDefaultChainable<string>
	sup(): SugarDefaultChainable<string>
	toLocaleLowerCase(): SugarDefaultChainable<string>
	toLocaleUpperCase(): SugarDefaultChainable<string>
	toLowerCase(): SugarDefaultChainable<string>
	toUpperCase(): SugarDefaultChainable<string>
	trim(): SugarDefaultChainable<string>
}
