import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'
import type { Locale, Options, CreateOptions } from './options'

export default interface Constructor extends SugarNamespace<DateConstructor> {
	(d?: string|number|Date, options?: CreateOptions): Chainable
	new(d?: string|number|Date, options?: CreateOptions): Chainable
	addLocale(localeCode: string, def: Object): Locale
	create(d?: string|number|Date, options?: CreateOptions): Date
	getAllLocaleCodes(): string[]
	getAllLocales(): Array<Locale>
	getLocale(localeCode?: string): Locale
	range(start?: string|Date, end?: string|Date): Range
	removeLocale(localeCode: string): Locale
	setLocale(localeCode: string): Locale
	addDays(instance: Date, n: number, reset?: boolean): Date
	addHours(instance: Date, n: number, reset?: boolean): Date
	addMilliseconds(instance: Date, n: number, reset?: boolean): Date
	addMinutes(instance: Date, n: number, reset?: boolean): Date
	addMonths(instance: Date, n: number, reset?: boolean): Date
	addSeconds(instance: Date, n: number, reset?: boolean): Date
	addWeeks(instance: Date, n: number, reset?: boolean): Date
	addYears(instance: Date, n: number, reset?: boolean): Date
	advance(instance: Date, set: string|Object, reset?: boolean): Date
	advance(instance: Date, milliseconds: number): Date
	advance(instance: Date, year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
	beginningOfDay(instance: Date, localeCode?: string): Date
	beginningOfISOWeek(instance: Date): Date
	beginningOfMonth(instance: Date, localeCode?: string): Date
	beginningOfWeek(instance: Date, localeCode?: string): Date
	beginningOfYear(instance: Date, localeCode?: string): Date
	clone(instance: Date): Date
	daysAgo(instance: Date): number
	daysFromNow(instance: Date): number
	daysInMonth(instance: Date): number
	daysSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	daysUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	endOfDay(instance: Date, localeCode?: string): Date
	endOfISOWeek(instance: Date): Date
	endOfMonth(instance: Date, localeCode?: string): Date
	endOfWeek(instance: Date, localeCode?: string): Date
	endOfYear(instance: Date, localeCode?: string): Date
	format(instance: Date, f?: string, localeCode?: string): string
	full(instance: Date, localeCode?: string): string
	get(instance: Date, d: string|number|Date, options?: CreateOptions): Date
	getISOWeek(instance: Date): number
	getUTCOffset(instance: Date, iso?: boolean): string
	getUTCWeekday(instance: Date): number
	getWeekday(instance: Date): number
	hoursAgo(instance: Date): number
	hoursFromNow(instance: Date): number
	hoursSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	hoursUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	is(instance: Date, d: string|number|Date, margin?: number): boolean
	isAfter(instance: Date, d: string|number|Date, margin?: number): boolean
	isBefore(instance: Date, d: string|number|Date, margin?: number): boolean
	isBetween(instance: Date, d1: string|number|Date, d2: string|number|Date, margin?: number): boolean
	isFriday(instance: Date): boolean
	isFuture(instance: Date): boolean
	isLastMonth(instance: Date, localeCode?: string): boolean
	isLastWeek(instance: Date, localeCode?: string): boolean
	isLastYear(instance: Date, localeCode?: string): boolean
	isLeapYear(instance: Date): boolean
	isMonday(instance: Date): boolean
	isNextMonth(instance: Date, localeCode?: string): boolean
	isNextWeek(instance: Date, localeCode?: string): boolean
	isNextYear(instance: Date, localeCode?: string): boolean
	isPast(instance: Date): boolean
	isSaturday(instance: Date): boolean
	isSunday(instance: Date): boolean
	isThisMonth(instance: Date, localeCode?: string): boolean
	isThisWeek(instance: Date, localeCode?: string): boolean
	isThisYear(instance: Date, localeCode?: string): boolean
	isThursday(instance: Date): boolean
	isToday(instance: Date): boolean
	isTomorrow(instance: Date): boolean
	isTuesday(instance: Date): boolean
	isUTC(instance: Date): boolean
	isValid(instance: Date): boolean
	isWednesday(instance: Date): boolean
	isWeekday(instance: Date): boolean
	isWeekend(instance: Date): boolean
	isYesterday(instance: Date): boolean
	iso(instance: Date): string
	long(instance: Date, localeCode?: string): string
	medium(instance: Date, localeCode?: string): string
	millisecondsAgo(instance: Date): number
	millisecondsFromNow(instance: Date): number
	millisecondsSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	millisecondsUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	minutesAgo(instance: Date): number
	minutesFromNow(instance: Date): number
	minutesSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	minutesUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	monthsAgo(instance: Date): number
	monthsFromNow(instance: Date): number
	monthsSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	monthsUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	relative(instance: Date, localeCode?: string, relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): string
	relative(instance: Date, relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): string
	relativeTo(instance: Date, d: string|number|Date, localeCode?: string): string
	reset(instance: Date, unit?: string, localeCode?: string): Date
	rewind(instance: Date, set: string|Object, reset?: boolean): Date
	rewind(instance: Date, milliseconds: number): Date
	rewind(instance: Date, year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
	secondsAgo(instance: Date): number
	secondsFromNow(instance: Date): number
	secondsSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	secondsUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	set(instance: Date, set: Object, reset?: boolean): Date
	set(instance: Date, milliseconds: number): Date
	set(instance: Date, year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
	setISOWeek(instance: Date, num: number): void
	setUTC(instance: Date, on?: boolean): Date
	setWeekday(instance: Date, dow: number): void
	short(instance: Date, localeCode?: string): string
	weeksAgo(instance: Date): number
	weeksFromNow(instance: Date): number
	weeksSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	weeksUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	yearsAgo(instance: Date): number
	yearsFromNow(instance: Date): number
	yearsSince(instance: Date, d: string|number|Date, options?: CreateOptions): number
	yearsUntil(instance: Date, d?: string|number|Date, options?: CreateOptions): number
	getOption<T>(name: string): T
	setOption(name: string, value: any): void
	setOption(options: Options): void
}
