import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'
import type { Options, DateCreateOptions } from './options'

export default interface Constructor extends SugarNamespace {
	(raw?: number): Chainable<number>
	new(raw?: number): Chainable<number>
	random(n1?: number, n2?: number): number
	range(start?: number, end?: number): Range
	abbr(instance: number, precision?: number): string
	abs(instance: number): number
	acos(instance: number): number
	asin(instance: number): number
	atan(instance: number): number
	bytes(instance: number, precision?: number, binary?: boolean, units?: string): string
	cap(instance: number, max?: number): number
	ceil(instance: number, precision?: number): number
	chr(instance: number): string
	clamp(instance: number, start?: number, end?: number): number
	cos(instance: number): number
	day(instance: number): number
	dayAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	dayAgo(instance: number): Date
	dayBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	dayFromNow(instance: number): Date
	days(instance: number): number
	daysAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	daysAgo(instance: number): Date
	daysBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	daysFromNow(instance: number): Date
	downto<T>(instance: number, num: number, step?: number, everyFn?: (el: T, i: number, r: Range) => void): T[]
	downto<T>(instance: number, num: number, everyFn?: (el: T, i: number, r: Range) => void): T[]
	duration(instance: number, localeCode?: string): string
	exp(instance: number): number
	floor(instance: number, precision?: number): number
	format(instance: number, place?: number): string
	hex(instance: number, pad?: number): string
	hour(instance: number): number
	hourAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	hourAgo(instance: number): Date
	hourBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	hourFromNow(instance: number): Date
	hours(instance: number): number
	hoursAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	hoursAgo(instance: number): Date
	hoursBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	hoursFromNow(instance: number): Date
	isEven(instance: number): boolean
	isInteger(instance: number): boolean
	isMultipleOf(instance: number, num: number): boolean
	isOdd(instance: number): boolean
	log(instance: number, base?: number): number
	metric(instance: number, precision?: number, units?: string): string
	millisecond(instance: number): number
	millisecondAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	millisecondAgo(instance: number): Date
	millisecondBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	millisecondFromNow(instance: number): Date
	milliseconds(instance: number): number
	millisecondsAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	millisecondsAgo(instance: number): Date
	millisecondsBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	millisecondsFromNow(instance: number): Date
	minute(instance: number): number
	minuteAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	minuteAgo(instance: number): Date
	minuteBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	minuteFromNow(instance: number): Date
	minutes(instance: number): number
	minutesAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	minutesAgo(instance: number): Date
	minutesBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	minutesFromNow(instance: number): Date
	month(instance: number): number
	monthAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	monthAgo(instance: number): Date
	monthBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	monthFromNow(instance: number): Date
	months(instance: number): number
	monthsAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	monthsAgo(instance: number): Date
	monthsBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	monthsFromNow(instance: number): Date
	ordinalize(instance: number): string
	pad(instance: number, place?: number, sign?: boolean, base?: number): string
	pow(instance: number): number
	round(instance: number, precision?: number): number
	second(instance: number): number
	secondAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	secondAgo(instance: number): Date
	secondBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	secondFromNow(instance: number): Date
	seconds(instance: number): number
	secondsAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	secondsAgo(instance: number): Date
	secondsBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	secondsFromNow(instance: number): Date
	sin(instance: number): number
	sqrt(instance: number): number
	tan(instance: number): number
	times<T>(instance: number, indexMapFn: (i: number) => any): T
	toNumber(instance: number): number
	upto<T>(instance: number, num: number, step?: number, everyFn?: (el: T, i: number, r: Range) => void): T[]
	upto<T>(instance: number, num: number, everyFn?: (el: T, i: number, r: Range) => void): T[]
	week(instance: number): number
	weekAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	weekAgo(instance: number): Date
	weekBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	weekFromNow(instance: number): Date
	weeks(instance: number): number
	weeksAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	weeksAgo(instance: number): Date
	weeksBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	weeksFromNow(instance: number): Date
	year(instance: number): number
	yearAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	yearAgo(instance: number): Date
	yearBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	yearFromNow(instance: number): Date
	years(instance: number): number
	yearsAfter(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	yearsAgo(instance: number): Date
	yearsBefore(instance: number, d: string|number|Date, options?: DateCreateOptions): Date
	yearsFromNow(instance: number): Date
	getOption<T>(name: string): T
	setOption(name: string, value: any): void
	setOption(options: Options): void
}
