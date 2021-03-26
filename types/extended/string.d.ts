import type * as sugarjs from '../namespaces'

declare global {
	interface StringConstructor {
		range(start?: string, end?: string): sugarjs.Range
	}

	interface String {
		at<T>(index: number|Array<number>, loop?: boolean): T
		camelize(upper?: boolean): string
		capitalize(lower?: boolean, all?: boolean): string
		chars<T>(eachCharFn?: (char: string, i: number, arr: Array<string>) => void): T[]
		codes<T>(eachCodeFn?: (code: number, i: number, str: string) => void): T[]
		compact(): string
		dasherize(): string
		decodeBase64(): string
		encodeBase64(): string
		escapeHTML(): string
		escapeURL(param?: boolean): string
		first(n?: number): string
		forEach<T>(search?: string|RegExp, eachFn?: (match: string, i: number, arr: Array<string>) => void): T[]
		forEach<T>(eachFn: (match: string, i: number, arr: Array<string>) => void): T[]
		format(...args: any[]): string
		from(index?: number): string
		insert(str: string, index?: number): string
		isBlank(): boolean
		isEmpty(): boolean
		last(n?: number): string
		lines<T>(eachLineFn?: (line: string, i: number, arr: Array<string>) => void): T[]
		pad(num: number, padding?: string): string
		padLeft(num: number, padding?: string): string
		padRight(num: number, padding?: string): string
		parameterize(): string
		remove(f: string|RegExp): string
		removeAll(f: string|RegExp): string
		removeTags(tag?: string, replace?: string|sugarjs.String.replaceFn): string
		replaceAll(f: string|RegExp, ...args: any[]): string
		reverse(): string
		shift<T>(n: number): T[]
		spacify(): string
		stripTags(tag?: string, replace?: string|sugarjs.String.replaceFn): string
		titleize(): string
		to(index?: number): string
		toNumber(base?: number): number
		trimLeft(): string
		trimRight(): string
		truncate(length: number, from?: string, ellipsis?: string): string
		truncateOnWord(length: number, from?: string, ellipsis?: string): string
		underscore(): string
		unescapeHTML(): string
		unescapeURL(partial?: boolean): string
		words<T>(eachWordFn?: (word: string, i: number, arr: Array<string>) => void): T[]
	}
}
