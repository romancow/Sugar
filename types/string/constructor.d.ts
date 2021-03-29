import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'
import type { ReplaceFn } from './options'

export default interface Constructor extends SugarNamespace {
	(raw?: string): Chainable
	new(raw?: string): Chainable
	range(start?: string, end?: string): Range;
	at<T>(instance: string, index: number|Array<number>, loop?: boolean): T;
	camelize(instance: string, upper?: boolean): string;
	capitalize(instance: string, lower?: boolean, all?: boolean): string;
	chars<T>(instance: string, eachCharFn?: (char: string, i: number, arr: Array<string>) => void): T[];
	codes<T>(instance: string, eachCodeFn?: (code: number, i: number, str: string) => void): T[];
	compact(instance: string): string;
	dasherize(instance: string): string;
	decodeBase64(instance: string): string;
	encodeBase64(instance: string): string;
	escapeHTML(instance: string): string;
	escapeURL(instance: string, param?: boolean): string;
	first(instance: string, n?: number): string;
	forEach<T>(instance: string, search?: string|RegExp, eachFn?: (match: string, i: number, arr: Array<string>) => void): T[];
	forEach<T>(instance: string, eachFn: (match: string, i: number, arr: Array<string>) => void): T[];
	format(instance: string, ...args: any[]): string;
	from(instance: string, index?: number): string;
	insert(instance: string, str: string, index?: number): string;
	isBlank(instance: string): boolean;
	isEmpty(instance: string): boolean;
	last(instance: string, n?: number): string;
	lines<T>(instance: string, eachLineFn?: (line: string, i: number, arr: Array<string>) => void): T[];
	pad(instance: string, num: number, padding?: string): string;
	padLeft(instance: string, num: number, padding?: string): string;
	padRight(instance: string, num: number, padding?: string): string;
	parameterize(instance: string): string;
	remove(instance: string, f: string|RegExp): string;
	removeAll(instance: string, f: string|RegExp): string;
	removeTags(instance: string, tag?: string, replace?: string|ReplaceFn): string;
	replaceAll(instance: string, f: string|RegExp, ...args: any[]): string;
	reverse(instance: string): string;
	shift<T>(instance: string, n: number): T[];
	spacify(instance: string): string;
	stripTags(instance: string, tag?: string, replace?: string|ReplaceFn): string;
	titleize(instance: string): string;
	to(instance: string, index?: number): string;
	toNumber(instance: string, base?: number): number;
	trimLeft(instance: string): string;
	trimRight(instance: string): string;
	truncate(instance: string, length: number, from?: string, ellipsis?: string): string;
	truncateOnWord(instance: string, length: number, from?: string, ellipsis?: string): string;
	underscore(instance: string): string;
	unescapeHTML(instance: string): string;
	unescapeURL(instance: string, partial?: boolean): string;
	words<T>(instance: string, eachWordFn?: (word: string, i: number, arr: Array<string>) => void): T[];
}
