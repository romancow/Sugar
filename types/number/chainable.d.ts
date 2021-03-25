import type ObjectChainable from '../object/chainable'
import type { SugarDefaultChainable } from '../sugar'
import type { DateCreateOptions } from './options'

type Chainable<RawValue> = ChainableBase<RawValue> & ObjectChainable<RawValue>

export default Chainable

export interface ChainableBase<RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	abbr(precision?: number): SugarDefaultChainable<string>
	abs(): SugarDefaultChainable<number>
	acos(): SugarDefaultChainable<number>
	asin(): SugarDefaultChainable<number>
	atan(): SugarDefaultChainable<number>
	bytes(precision?: number, binary?: boolean, units?: string): SugarDefaultChainable<string>
	cap(max?: number): SugarDefaultChainable<number>
	ceil(precision?: number): SugarDefaultChainable<number>
	chr(): SugarDefaultChainable<string>
	clamp(start?: number, end?: number): SugarDefaultChainable<number>
	cos(): SugarDefaultChainable<number>
	day(): SugarDefaultChainable<number>
	dayAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	dayAgo(): SugarDefaultChainable<Date>
	dayBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	dayFromNow(): SugarDefaultChainable<Date>
	days(): SugarDefaultChainable<number>
	daysAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	daysAgo(): SugarDefaultChainable<Date>
	daysBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	daysFromNow(): SugarDefaultChainable<Date>
	downto<T>(num: number, step?: number, everyFn?: (el: T, i: number, r: Range) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	downto<T>(num: number, everyFn?: (el: T, i: number, r: Range) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	duration(localeCode?: string): SugarDefaultChainable<string>
	exp(): SugarDefaultChainable<number>
	floor(precision?: number): SugarDefaultChainable<number>
	format(place?: number): SugarDefaultChainable<string>
	hex(pad?: number): SugarDefaultChainable<string>
	hour(): SugarDefaultChainable<number>
	hourAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	hourAgo(): SugarDefaultChainable<Date>
	hourBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	hourFromNow(): SugarDefaultChainable<Date>
	hours(): SugarDefaultChainable<number>
	hoursAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	hoursAgo(): SugarDefaultChainable<Date>
	hoursBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	hoursFromNow(): SugarDefaultChainable<Date>
	isEven(): SugarDefaultChainable<boolean>
	isInteger(): SugarDefaultChainable<boolean>
	isMultipleOf(num: number): SugarDefaultChainable<boolean>
	isOdd(): SugarDefaultChainable<boolean>
	log(base?: number): SugarDefaultChainable<number>
	metric(precision?: number, units?: string): SugarDefaultChainable<string>
	millisecond(): SugarDefaultChainable<number>
	millisecondAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	millisecondAgo(): SugarDefaultChainable<Date>
	millisecondBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	millisecondFromNow(): SugarDefaultChainable<Date>
	milliseconds(): SugarDefaultChainable<number>
	millisecondsAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	millisecondsAgo(): SugarDefaultChainable<Date>
	millisecondsBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	millisecondsFromNow(): SugarDefaultChainable<Date>
	minute(): SugarDefaultChainable<number>
	minuteAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	minuteAgo(): SugarDefaultChainable<Date>
	minuteBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	minuteFromNow(): SugarDefaultChainable<Date>
	minutes(): SugarDefaultChainable<number>
	minutesAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	minutesAgo(): SugarDefaultChainable<Date>
	minutesBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	minutesFromNow(): SugarDefaultChainable<Date>
	month(): SugarDefaultChainable<number>
	monthAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	monthAgo(): SugarDefaultChainable<Date>
	monthBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	monthFromNow(): SugarDefaultChainable<Date>
	months(): SugarDefaultChainable<number>
	monthsAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	monthsAgo(): SugarDefaultChainable<Date>
	monthsBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	monthsFromNow(): SugarDefaultChainable<Date>
	ordinalize(): SugarDefaultChainable<string>
	pad(place?: number, sign?: boolean, base?: number): SugarDefaultChainable<string>
	pow(): SugarDefaultChainable<number>
	round(precision?: number): SugarDefaultChainable<number>
	second(): SugarDefaultChainable<number>
	secondAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	secondAgo(): SugarDefaultChainable<Date>
	secondBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	secondFromNow(): SugarDefaultChainable<Date>
	seconds(): SugarDefaultChainable<number>
	secondsAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	secondsAgo(): SugarDefaultChainable<Date>
	secondsBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	secondsFromNow(): SugarDefaultChainable<Date>
	sin(): SugarDefaultChainable<number>
	sqrt(): SugarDefaultChainable<number>
	tan(): SugarDefaultChainable<number>
	times<T>(indexMapFn: (i: number) => SugarDefaultChainable<any>): SugarDefaultChainable<T>
	toNumber(): SugarDefaultChainable<number>
	upto<T>(num: number, step?: number, everyFn?: (el: T, i: number, r: Range) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	upto<T>(num: number, everyFn?: (el: T, i: number, r: Range) => SugarDefaultChainable<void>): SugarDefaultChainable<T[]>
	week(): SugarDefaultChainable<number>
	weekAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	weekAgo(): SugarDefaultChainable<Date>
	weekBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	weekFromNow(): SugarDefaultChainable<Date>
	weeks(): SugarDefaultChainable<number>
	weeksAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	weeksAgo(): SugarDefaultChainable<Date>
	weeksBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	weeksFromNow(): SugarDefaultChainable<Date>
	year(): SugarDefaultChainable<number>
	yearAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	yearAgo(): SugarDefaultChainable<Date>
	yearBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	yearFromNow(): SugarDefaultChainable<Date>
	years(): SugarDefaultChainable<number>
	yearsAfter(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	yearsAgo(): SugarDefaultChainable<Date>
	yearsBefore(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	yearsFromNow(): SugarDefaultChainable<Date>
	toExponential(fractionDigits?: number): SugarDefaultChainable<string>
	toFixed(fractionDigits?: number): SugarDefaultChainable<string>
	toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): SugarDefaultChainable<string>
	toPrecision(precision?: number): SugarDefaultChainable<string>
}