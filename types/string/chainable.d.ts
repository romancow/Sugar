import type { ChainableWith } from '../object/chainable'
import type { replaceFn } from './options'
import type { Array, Object, Number } from '../namespaces'

type Chainable<Raw extends string = string> = ChainableWith<Raw, {
	at(index: number|number[], loop?: boolean): Chainable | Array.Chainable<string>
	camelize(upper?: boolean): Chainable
	capitalize(lower?: boolean, all?: boolean): Chainable<Capitalize<string>>
	chars(eachCharFn?: (char: string, i: number, arr: string[]) => void): Array.Chainable<string>
	codes(eachCodeFn?: (code: number, i: number, str: string) => void): Array.Chainable<number>
	compact(): Chainable
	dasherize(): Chainable
	decodeBase64(): Chainable
	encodeBase64(): Chainable
	escapeHTML(): Chainable
	escapeURL(param?: boolean): Chainable
	first(n?: number): Chainable
	forEach<T = string>(search?: string|RegExp, eachFn?: (match: string, i: number, arr: string[]) => T): Array.Chainable<T>
	forEach<T>(eachFn: (match: string, i: number, arr: string[]) => T): Array.Chainable<T>
	format(...args: any[]): Chainable
	from(index?: number): Chainable
	insert(str: string, index?: number): Chainable
	isBlank(): Object.Chainable<boolean>
	isEmpty(): Object.Chainable<boolean>
	last(n?: number): Chainable
	lines<T = string>(eachLineFn?: (line: string, i: number, arr: string[]) => T): Array.Chainable<T>
	pad(num: number, padding?: string): Chainable
	padLeft(num: number, padding?: string): Chainable
	padRight(num: number, padding?: string): Chainable
	parameterize(): Chainable
	remove(f: string|RegExp): Chainable
	removeAll(f: string|RegExp): Chainable
	removeTags(tag?: string, replace?: string|replaceFn): Chainable
	replaceAll(f: string|RegExp, ...args: any[]): Chainable
	reverse(): Chainable
	shift(n: number): Chainable
	spacify(): Chainable
	stripTags(tag?: string, replace?: string|replaceFn): Chainable
	titleize(): Chainable
	to(index?: number): Chainable
	toNumber(base?: number): Number.Chainable
	trimLeft(): Chainable
	trimRight(): Chainable
	truncate(length: number, from?: string, ellipsis?: string): Chainable
	truncateOnWord(length: number, from?: string, ellipsis?: string): Chainable
	underscore(): Chainable
	unescapeHTML(): Chainable
	unescapeURL(partial?: boolean): Chainable
	words<T = string>(eachWordFn?: (word: string, i: number, arr: string[]) => T): Array.Chainable<T>
	anchor(name: string): Chainable
	big(): Chainable
	blink(): Chainable
	bold(): Chainable
	charAt(pos: number): Chainable
	charCodeAt(index: number): Number.Chainable
	codePointAt(pos: number): Number.Chainable | Object.Chainable<undefined>
	concat(...strings: string[]): Chainable
	endsWith(searchString: string, endPosition?: number): Object.Chainable<boolean>
	fixed(): Chainable
	fontcolor(color: string): Chainable
	fontsize(size: number): Chainable
	fontsize(size: string): Chainable
	includes(searchString: string, position?: number): Object.Chainable<boolean>
	indexOf(searchString: string, position?: number): Number.Chainable
	italics(): Chainable
	lastIndexOf(searchString: string, position?: number): Number.Chainable
	link(url: string): Chainable
	localeCompare(that: string): Number.Chainable
	localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): Number.Chainable
	match(regexp: RegExp): Object.Chainable<RegExpMatchArray | null>
	match(regexp: string): Object.Chainable<RegExpMatchArray | null>
	normalize(form?: string): Chainable
	normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): Chainable
	repeat(count: number): Chainable
	replace(searchValue: string, replaceValue: string): Chainable
	replace(searchValue: string, replacer: (substring: string, ...args: any[]) => string): Chainable
	replace(searchValue: RegExp, replaceValue: string): Chainable
	replace(searchValue: RegExp, replacer: (substring: string, ...args: any[]) => string): Chainable
	search(regexp: RegExp): Number.Chainable
	search(regexp: string): Number.Chainable
	slice(start?: number, end?: number): Chainable
	small(): Chainable
	split(separator: string, limit?: number): Array.Chainable<string>
	split(separator: RegExp, limit?: number): Array.Chainable<string>
	startsWith(searchString: string, position?: number): Object.Chainable<boolean>
	strike(): Chainable
	sub(): Chainable
	substr(from: number, length?: number): Chainable
	substring(start: number, end?: number): Chainable
	sup(): Chainable
	toLocaleLowerCase(): Chainable<Lowercase<string>>
	toLocaleUpperCase(): Chainable<Uppercase<string>>
	toLowerCase(): Chainable<Lowercase<string>>
	toUpperCase(): Chainable<Uppercase<string>>
	trim(): Chainable
}>
export default Chainable
