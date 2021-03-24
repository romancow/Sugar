import type ObjectChainable from '../object/chainable'
import type { Locale, DateCreateOptions } from './common'
import type { SugarDefaultChainable } from '../sugar'

type Chainable<RawValue> = ChainableBase<RawValue> & ObjectChainable<RawValue>

export default Chainable

export interface ChainableBase<RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	addDays(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addHours(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addMilliseconds(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addMinutes(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addMonths(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addSeconds(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addWeeks(n: number, reset?: boolean): SugarDefaultChainable<Date>
	addYears(n: number, reset?: boolean): SugarDefaultChainable<Date>
	advance(set: string|Object, reset?: boolean): SugarDefaultChainable<Date>
	advance(milliseconds: number): SugarDefaultChainable<Date>
	advance(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): SugarDefaultChainable<Date>
	beginningOfDay(localeCode?: string): SugarDefaultChainable<Date>
	beginningOfISOWeek(): SugarDefaultChainable<Date>
	beginningOfMonth(localeCode?: string): SugarDefaultChainable<Date>
	beginningOfWeek(localeCode?: string): SugarDefaultChainable<Date>
	beginningOfYear(localeCode?: string): SugarDefaultChainable<Date>
	clone(): SugarDefaultChainable<Date>
	daysAgo(): SugarDefaultChainable<number>
	daysFromNow(): SugarDefaultChainable<number>
	daysInMonth(): SugarDefaultChainable<number>
	daysSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	daysUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	endOfDay(localeCode?: string): SugarDefaultChainable<Date>
	endOfISOWeek(): SugarDefaultChainable<Date>
	endOfMonth(localeCode?: string): SugarDefaultChainable<Date>
	endOfWeek(localeCode?: string): SugarDefaultChainable<Date>
	endOfYear(localeCode?: string): SugarDefaultChainable<Date>
	format(f?: string, localeCode?: string): SugarDefaultChainable<string>
	full(localeCode?: string): SugarDefaultChainable<string>
	get(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<Date>
	getISOWeek(): SugarDefaultChainable<number>
	getUTCOffset(iso?: boolean): SugarDefaultChainable<string>
	getUTCWeekday(): SugarDefaultChainable<number>
	getWeekday(): SugarDefaultChainable<number>
	hoursAgo(): SugarDefaultChainable<number>
	hoursFromNow(): SugarDefaultChainable<number>
	hoursSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	hoursUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	is(d: string|number|Date, margin?: number): SugarDefaultChainable<boolean>
	isAfter(d: string|number|Date, margin?: number): SugarDefaultChainable<boolean>
	isBefore(d: string|number|Date, margin?: number): SugarDefaultChainable<boolean>
	isBetween(d1: string|number|Date, d2: string|number|Date, margin?: number): SugarDefaultChainable<boolean>
	isFriday(): SugarDefaultChainable<boolean>
	isFuture(): SugarDefaultChainable<boolean>
	isLastMonth(localeCode?: string): SugarDefaultChainable<boolean>
	isLastWeek(localeCode?: string): SugarDefaultChainable<boolean>
	isLastYear(localeCode?: string): SugarDefaultChainable<boolean>
	isLeapYear(): SugarDefaultChainable<boolean>
	isMonday(): SugarDefaultChainable<boolean>
	isNextMonth(localeCode?: string): SugarDefaultChainable<boolean>
	isNextWeek(localeCode?: string): SugarDefaultChainable<boolean>
	isNextYear(localeCode?: string): SugarDefaultChainable<boolean>
	isPast(): SugarDefaultChainable<boolean>
	isSaturday(): SugarDefaultChainable<boolean>
	isSunday(): SugarDefaultChainable<boolean>
	isThisMonth(localeCode?: string): SugarDefaultChainable<boolean>
	isThisWeek(localeCode?: string): SugarDefaultChainable<boolean>
	isThisYear(localeCode?: string): SugarDefaultChainable<boolean>
	isThursday(): SugarDefaultChainable<boolean>
	isToday(): SugarDefaultChainable<boolean>
	isTomorrow(): SugarDefaultChainable<boolean>
	isTuesday(): SugarDefaultChainable<boolean>
	isUTC(): SugarDefaultChainable<boolean>
	isValid(): SugarDefaultChainable<boolean>
	isWednesday(): SugarDefaultChainable<boolean>
	isWeekday(): SugarDefaultChainable<boolean>
	isWeekend(): SugarDefaultChainable<boolean>
	isYesterday(): SugarDefaultChainable<boolean>
	iso(): SugarDefaultChainable<string>
	long(localeCode?: string): SugarDefaultChainable<string>
	medium(localeCode?: string): SugarDefaultChainable<string>
	millisecondsAgo(): SugarDefaultChainable<number>
	millisecondsFromNow(): SugarDefaultChainable<number>
	millisecondsSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	millisecondsUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	minutesAgo(): SugarDefaultChainable<number>
	minutesFromNow(): SugarDefaultChainable<number>
	minutesSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	minutesUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	monthsAgo(): SugarDefaultChainable<number>
	monthsFromNow(): SugarDefaultChainable<number>
	monthsSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	monthsUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	relative(localeCode?: string, relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => SugarDefaultChainable<string>): SugarDefaultChainable<string>
	relative(relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => SugarDefaultChainable<string>): SugarDefaultChainable<string>
	relativeTo(d: string|number|Date, localeCode?: string): SugarDefaultChainable<string>
	reset(unit?: string, localeCode?: string): SugarDefaultChainable<Date>
	rewind(set: string|Object, reset?: boolean): SugarDefaultChainable<Date>
	rewind(milliseconds: number): SugarDefaultChainable<Date>
	rewind(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): SugarDefaultChainable<Date>
	secondsAgo(): SugarDefaultChainable<number>
	secondsFromNow(): SugarDefaultChainable<number>
	secondsSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	secondsUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	set(set: Object, reset?: boolean): SugarDefaultChainable<Date>
	set(milliseconds: number): SugarDefaultChainable<Date>
	set(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): SugarDefaultChainable<Date>
	setISOWeek(num: number): SugarDefaultChainable<void>
	setUTC(on?: boolean): SugarDefaultChainable<Date>
	setWeekday(dow: number): SugarDefaultChainable<void>
	short(localeCode?: string): SugarDefaultChainable<string>
	weeksAgo(): SugarDefaultChainable<number>
	weeksFromNow(): SugarDefaultChainable<number>
	weeksSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	weeksUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	yearsAgo(): SugarDefaultChainable<number>
	yearsFromNow(): SugarDefaultChainable<number>
	yearsSince(d: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	yearsUntil(d?: string|number|Date, options?: DateCreateOptions): SugarDefaultChainable<number>
	getDate(): SugarDefaultChainable<number>
	getDay(): SugarDefaultChainable<number>
	getFullYear(): SugarDefaultChainable<number>
	getHours(): SugarDefaultChainable<number>
	getMilliseconds(): SugarDefaultChainable<number>
	getMinutes(): SugarDefaultChainable<number>
	getMonth(): SugarDefaultChainable<number>
	getSeconds(): SugarDefaultChainable<number>
	getTime(): SugarDefaultChainable<number>
	getTimezoneOffset(): SugarDefaultChainable<number>
	getUTCDate(): SugarDefaultChainable<number>
	getUTCDay(): SugarDefaultChainable<number>
	getUTCFullYear(): SugarDefaultChainable<number>
	getUTCHours(): SugarDefaultChainable<number>
	getUTCMilliseconds(): SugarDefaultChainable<number>
	getUTCMinutes(): SugarDefaultChainable<number>
	getUTCMonth(): SugarDefaultChainable<number>
	getUTCSeconds(): SugarDefaultChainable<number>
	setDate(date: number): SugarDefaultChainable<number>
	setFullYear(year: number, month?: number, date?: number): SugarDefaultChainable<number>
	setHours(hours: number, min?: number, sec?: number, ms?: number): SugarDefaultChainable<number>
	setMilliseconds(ms: number): SugarDefaultChainable<number>
	setMinutes(min: number, sec?: number, ms?: number): SugarDefaultChainable<number>
	setMonth(month: number, date?: number): SugarDefaultChainable<number>
	setSeconds(sec: number, ms?: number): SugarDefaultChainable<number>
	setTime(time: number): SugarDefaultChainable<number>
	setUTCDate(date: number): SugarDefaultChainable<number>
	setUTCFullYear(year: number, month?: number, date?: number): SugarDefaultChainable<number>
	setUTCHours(hours: number, min?: number, sec?: number, ms?: number): SugarDefaultChainable<number>
	setUTCMilliseconds(ms: number): SugarDefaultChainable<number>
	setUTCMinutes(min: number, sec?: number, ms?: number): SugarDefaultChainable<number>
	setUTCMonth(month: number, date?: number): SugarDefaultChainable<number>
	setUTCSeconds(sec: number, ms?: number): SugarDefaultChainable<number>
	toDateString(): SugarDefaultChainable<string>
	toISOString(): SugarDefaultChainable<string>
	toJSON(key?: any): SugarDefaultChainable<string>
	toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): SugarDefaultChainable<string>
	toLocaleDateString(): SugarDefaultChainable<string>
	toLocaleString(): SugarDefaultChainable<string>
	toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): SugarDefaultChainable<string>
	toLocaleTimeString(): SugarDefaultChainable<string>
	toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): SugarDefaultChainable<string>
	toTimeString(): SugarDefaultChainable<string>
	toUTCString(): SugarDefaultChainable<string>
}
