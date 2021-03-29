import type { ChainableWith } from '../object/chainable'
import type { Locale, DateCreateOptions } from './options'
import type { Number, String, Object } from '../namespaces'

type Chainable<Raw extends Date = Date> = ChainableWith<Raw, {
	addDays(n: number, reset?: boolean): Chainable
	addHours(n: number, reset?: boolean): Chainable
	addMilliseconds(n: number, reset?: boolean): Chainable
	addMinutes(n: number, reset?: boolean): Chainable
	addMonths(n: number, reset?: boolean): Chainable
	addSeconds(n: number, reset?: boolean): Chainable
	addWeeks(n: number, reset?: boolean): Chainable
	addYears(n: number, reset?: boolean): Chainable
	advance(set: string|Object, reset?: boolean): Chainable
	advance(milliseconds: number): Chainable
	advance(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Chainable
	beginningOfDay(localeCode?: string): Chainable
	beginningOfISOWeek(): Chainable
	beginningOfMonth(localeCode?: string): Chainable
	beginningOfWeek(localeCode?: string): Chainable
	beginningOfYear(localeCode?: string): Chainable
	clone(): Chainable
	daysAgo(): Number.Chainable
	daysFromNow(): Number.Chainable
	daysInMonth(): Number.Chainable
	daysSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	daysUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	endOfDay(localeCode?: string): Chainable
	endOfISOWeek(): Chainable
	endOfMonth(localeCode?: string): Chainable
	endOfWeek(localeCode?: string): Chainable
	endOfYear(localeCode?: string): Chainable
	format(f?: string, localeCode?: string): String.Chainable
	full(localeCode?: string): String.Chainable
	get(d: string|number|Date, options?: DateCreateOptions): Chainable
	getISOWeek(): Number.Chainable
	getUTCOffset(iso?: boolean): String.Chainable
	getUTCWeekday(): Number.Chainable
	getWeekday(): Number.Chainable
	hoursAgo(): Number.Chainable
	hoursFromNow(): Number.Chainable
	hoursSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	hoursUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	is(d: string|number|Date, margin?: number): Object.Chainable<boolean>
	isAfter(d: string|number|Date, margin?: number): Object.Chainable<boolean>
	isBefore(d: string|number|Date, margin?: number): Object.Chainable<boolean>
	isBetween(d1: string|number|Date, d2: string|number|Date, margin?: number): Object.Chainable<boolean>
	isFriday(): Object.Chainable<boolean>
	isFuture(): Object.Chainable<boolean>
	isLastMonth(localeCode?: string): Object.Chainable<boolean>
	isLastWeek(localeCode?: string): Object.Chainable<boolean>
	isLastYear(localeCode?: string): Object.Chainable<boolean>
	isLeapYear(): Object.Chainable<boolean>
	isMonday(): Object.Chainable<boolean>
	isNextMonth(localeCode?: string): Object.Chainable<boolean>
	isNextWeek(localeCode?: string): Object.Chainable<boolean>
	isNextYear(localeCode?: string): Object.Chainable<boolean>
	isPast(): Object.Chainable<boolean>
	isSaturday(): Object.Chainable<boolean>
	isSunday(): Object.Chainable<boolean>
	isThisMonth(localeCode?: string): Object.Chainable<boolean>
	isThisWeek(localeCode?: string): Object.Chainable<boolean>
	isThisYear(localeCode?: string): Object.Chainable<boolean>
	isThursday(): Object.Chainable<boolean>
	isToday(): Object.Chainable<boolean>
	isTomorrow(): Object.Chainable<boolean>
	isTuesday(): Object.Chainable<boolean>
	isUTC(): Object.Chainable<boolean>
	isValid(): Object.Chainable<boolean>
	isWednesday(): Object.Chainable<boolean>
	isWeekday(): Object.Chainable<boolean>
	isWeekend(): Object.Chainable<boolean>
	isYesterday(): Object.Chainable<boolean>
	iso(): String.Chainable
	long(localeCode?: string): String.Chainable
	medium(localeCode?: string): String.Chainable
	millisecondsAgo(): Number.Chainable
	millisecondsFromNow(): Number.Chainable
	millisecondsSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	millisecondsUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	minutesAgo(): Number.Chainable
	minutesFromNow(): Number.Chainable
	minutesSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	minutesUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	monthsAgo(): Number.Chainable
	monthsFromNow(): Number.Chainable
	monthsSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	monthsUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	relative(localeCode?: string, relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): String.Chainable
	relative(relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): String.Chainable
	relativeTo(d: string|number|Date, localeCode?: string): String.Chainable
	reset(unit?: string, localeCode?: string): Chainable
	rewind(set: string|Object, reset?: boolean): Chainable
	rewind(milliseconds: number): Chainable
	rewind(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Chainable
	secondsAgo(): Number.Chainable
	secondsFromNow(): Number.Chainable
	secondsSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	secondsUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	set(set: Object, reset?: boolean): Chainable
	set(milliseconds: number): Chainable
	set(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Chainable
	setISOWeek(num: number): Number.Chainable
	setUTC(on?: boolean): Chainable
	setWeekday(dow: number): Number.Chainable
	short(localeCode?: string): String.Chainable
	weeksAgo(): Number.Chainable
	weeksFromNow(): Number.Chainable
	weeksSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	weeksUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	yearsAgo(): Number.Chainable
	yearsFromNow(): Number.Chainable
	yearsSince(d: string|number|Date, options?: DateCreateOptions): Number.Chainable
	yearsUntil(d?: string|number|Date, options?: DateCreateOptions): Number.Chainable
	getDate(): Number.Chainable
	getDay(): Number.Chainable
	getFullYear(): Number.Chainable
	getHours(): Number.Chainable
	getMilliseconds(): Number.Chainable
	getMinutes(): Number.Chainable
	getMonth(): Number.Chainable
	getSeconds(): Number.Chainable
	getTime(): Number.Chainable
	getTimezoneOffset(): Number.Chainable
	getUTCDate(): Number.Chainable
	getUTCDay(): Number.Chainable
	getUTCFullYear(): Number.Chainable
	getUTCHours(): Number.Chainable
	getUTCMilliseconds(): Number.Chainable
	getUTCMinutes(): Number.Chainable
	getUTCMonth(): Number.Chainable
	getUTCSeconds(): Number.Chainable
	setDate(date: number): Number.Chainable
	setFullYear(year: number, month?: number, date?: number): Number.Chainable
	setHours(hours: number, min?: number, sec?: number, ms?: number): Number.Chainable
	setMilliseconds(ms: number): Number.Chainable
	setMinutes(min: number, sec?: number, ms?: number): Number.Chainable
	setMonth(month: number, date?: number): Number.Chainable
	setSeconds(sec: number, ms?: number): Number.Chainable
	setTime(time: number): Number.Chainable
	setUTCDate(date: number): Number.Chainable
	setUTCFullYear(year: number, month?: number, date?: number): Number.Chainable
	setUTCHours(hours: number, min?: number, sec?: number, ms?: number): Number.Chainable
	setUTCMilliseconds(ms: number): Number.Chainable
	setUTCMinutes(min: number, sec?: number, ms?: number): Number.Chainable
	setUTCMonth(month: number, date?: number): Number.Chainable
	setUTCSeconds(sec: number, ms?: number): Number.Chainable
	toDateString(): String.Chainable
	toISOString(): String.Chainable
	toJSON(key?: any): String.Chainable
	toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): String.Chainable
	toLocaleDateString(): String.Chainable
	toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): String.Chainable
	toLocaleTimeString(): String.Chainable
	toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): String.Chainable
	toTimeString(): String.Chainable
	toUTCString(): String.Chainable
}>
export default Chainable
