import type { ChainableWith } from '../object/chainable'
import type { String, Date, Array, Object } from '../namespaces'
import type { DateCreateOptions } from './options'

type Chainable<Raw extends Number = Number> = ChainableWith<Raw, {
	abbr(precision?: number): String.Chainable
	abs(): Chainable
	acos(): Chainable
	asin(): Chainable
	atan(): Chainable
	bytes(precision?: number, binary?: boolean, units?: string): String.Chainable
	cap(max?: number): Chainable
	ceil(precision?: number): Chainable
	chr(): String.Chainable
	clamp(start?: number, end?: number): Chainable
	cos(): Chainable
	day(): Chainable
	dayAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	dayAgo(): Date.Chainable
	dayBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	dayFromNow(): Date.Chainable
	days(): Chainable
	daysAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	daysAgo(): Date.Chainable
	daysBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	daysFromNow(): Date.Chainable
	downto(num: number, step?: number, everyFn?: (el: number, i: number, r: Range) => void): Array.Chainable<number>
	downto(num: number, everyFn?: (el: number, i: number, r: Range) => void): Array.Chainable<number>
	duration(localeCode?: string): String.Chainable
	exp(): Chainable
	floor(precision?: number): Chainable
	format(place?: number): String.Chainable
	hex(pad?: number): String.Chainable
	hour(): Chainable
	hourAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	hourAgo(): Date.Chainable
	hourBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	hourFromNow(): Date.Chainable
	hours(): Chainable
	hoursAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	hoursAgo(): Date.Chainable
	hoursBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	hoursFromNow(): Date.Chainable
	isEven(): Object.Chainable<boolean>
	isInteger(): Object.Chainable<boolean>
	isMultipleOf(num: number): Object.Chainable<boolean>
	isOdd(): Object.Chainable<boolean>
	log(base?: number): Chainable
	metric(precision?: number, units?: string): String.Chainable
	millisecond(): Chainable
	millisecondAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	millisecondAgo(): Date.Chainable
	millisecondBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	millisecondFromNow(): Date.Chainable
	milliseconds(): Chainable
	millisecondsAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	millisecondsAgo(): Date.Chainable
	millisecondsBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	millisecondsFromNow(): Date.Chainable
	minute(): Chainable
	minuteAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	minuteAgo(): Date.Chainable
	minuteBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	minuteFromNow(): Date.Chainable
	minutes(): Chainable
	minutesAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	minutesAgo(): Date.Chainable
	minutesBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	minutesFromNow(): Date.Chainable
	month(): Chainable
	monthAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	monthAgo(): Date.Chainable
	monthBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	monthFromNow(): Date.Chainable
	months(): Chainable
	monthsAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	monthsAgo(): Date.Chainable
	monthsBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	monthsFromNow(): Date.Chainable
	ordinalize(): String.Chainable
	pad(place?: number, sign?: boolean, base?: number): String.Chainable
	pow(): Chainable
	round(precision?: number): Chainable
	second(): Chainable
	secondAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	secondAgo(): Date.Chainable
	secondBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	secondFromNow(): Date.Chainable
	seconds(): Chainable
	secondsAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	secondsAgo(): Date.Chainable
	secondsBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	secondsFromNow(): Date.Chainable
	sin(): Chainable
	sqrt(): Chainable
	tan(): Chainable
	times<T>(indexMapFn: (i: number) => T): Array.Chainable<T>
	toNumber(): Chainable
	upto(num: number, step?: number, everyFn?: (el: number, i: number, r: Range) => void): Array.Chainable<number>
	upto(num: number, everyFn?: (el: number, i: number, r: Range) => void): Array.Chainable<number>
	week(): Chainable
	weekAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	weekAgo(): Date.Chainable
	weekBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	weekFromNow(): Date.Chainable
	weeks(): Chainable
	weeksAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	weeksAgo(): Date.Chainable
	weeksBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	weeksFromNow(): Date.Chainable
	year(): Chainable
	yearAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	yearAgo(): Date.Chainable
	yearBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	yearFromNow(): Date.Chainable
	years(): Chainable
	yearsAfter(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	yearsAgo(): Date.Chainable
	yearsBefore(d: string|number|Date, options?: DateCreateOptions): Date.Chainable
	yearsFromNow(): Date.Chainable
	toExponential(fractionDigits?: number): String.Chainable
	toFixed(fractionDigits?: number): String.Chainable
	toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): String.Chainable
	toPrecision(precision?: number): String.Chainable
}>
export default Chainable
