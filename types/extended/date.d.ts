import type { Locale, CreateOptions } from '../Date/options'
import Range from '../range'

declare global {
	interface DateConstructor {
		addLocale(localeCode: string, def: Object): Locale
		create(d?: string|number|Date, options?: CreateOptions): Date
		getAllLocaleCodes(): string[]
		getAllLocales(): Array<Locale>
		getLocale(localeCode?: string): Locale
		range(start?: string|Date, end?: string|Date): Range
		removeLocale(localeCode: string): Locale
		setLocale(localeCode: string): Locale
	}

	interface Date {
		addDays(n: number, reset?: boolean): Date
		addHours(n: number, reset?: boolean): Date
		addMilliseconds(n: number, reset?: boolean): Date
		addMinutes(n: number, reset?: boolean): Date
		addMonths(n: number, reset?: boolean): Date
		addSeconds(n: number, reset?: boolean): Date
		addWeeks(n: number, reset?: boolean): Date
		addYears(n: number, reset?: boolean): Date
		advance(set: string|Object, reset?: boolean): Date
		advance(milliseconds: number): Date
		advance(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
		beginningOfDay(localeCode?: string): Date
		beginningOfISOWeek(): Date
		beginningOfMonth(localeCode?: string): Date
		beginningOfWeek(localeCode?: string): Date
		beginningOfYear(localeCode?: string): Date
		clone(): Date
		daysAgo(): number
		daysFromNow(): number
		daysInMonth(): number
		daysSince(d: string|number|Date, options?: CreateOptions): number
		daysUntil(d?: string|number|Date, options?: CreateOptions): number
		endOfDay(localeCode?: string): Date
		endOfISOWeek(): Date
		endOfMonth(localeCode?: string): Date
		endOfWeek(localeCode?: string): Date
		endOfYear(localeCode?: string): Date
		format(f?: string, localeCode?: string): string
		full(localeCode?: string): string
		get(d: string|number|Date, options?: CreateOptions): Date
		getISOWeek(): number
		getUTCOffset(iso?: boolean): string
		getUTCWeekday(): number
		getWeekday(): number
		hoursAgo(): number
		hoursFromNow(): number
		hoursSince(d: string|number|Date, options?: CreateOptions): number
		hoursUntil(d?: string|number|Date, options?: CreateOptions): number
		is(d: string|number|Date, margin?: number): boolean
		isAfter(d: string|number|Date, margin?: number): boolean
		isBefore(d: string|number|Date, margin?: number): boolean
		isBetween(d1: string|number|Date, d2: string|number|Date, margin?: number): boolean
		isFriday(): boolean
		isFuture(): boolean
		isLastMonth(localeCode?: string): boolean
		isLastWeek(localeCode?: string): boolean
		isLastYear(localeCode?: string): boolean
		isLeapYear(): boolean
		isMonday(): boolean
		isNextMonth(localeCode?: string): boolean
		isNextWeek(localeCode?: string): boolean
		isNextYear(localeCode?: string): boolean
		isPast(): boolean
		isSaturday(): boolean
		isSunday(): boolean
		isThisMonth(localeCode?: string): boolean
		isThisWeek(localeCode?: string): boolean
		isThisYear(localeCode?: string): boolean
		isThursday(): boolean
		isToday(): boolean
		isTomorrow(): boolean
		isTuesday(): boolean
		isUTC(): boolean
		isValid(): boolean
		isWednesday(): boolean
		isWeekday(): boolean
		isWeekend(): boolean
		isYesterday(): boolean
		iso(): string
		long(localeCode?: string): string
		medium(localeCode?: string): string
		millisecondsAgo(): number
		millisecondsFromNow(): number
		millisecondsSince(d: string|number|Date, options?: CreateOptions): number
		millisecondsUntil(d?: string|number|Date, options?: CreateOptions): number
		minutesAgo(): number
		minutesFromNow(): number
		minutesSince(d: string|number|Date, options?: CreateOptions): number
		minutesUntil(d?: string|number|Date, options?: CreateOptions): number
		monthsAgo(): number
		monthsFromNow(): number
		monthsSince(d: string|number|Date, options?: CreateOptions): number
		monthsUntil(d?: string|number|Date, options?: CreateOptions): number
		relative(localeCode?: string, relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): string
		relative(relativeFn?: (num: number, unit: number, ms: number, loc: Locale) => string): string
		relativeTo(d: string|number|Date, localeCode?: string): string
		reset(unit?: string, localeCode?: string): Date
		rewind(set: string|Object, reset?: boolean): Date
		rewind(milliseconds: number): Date
		rewind(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
		secondsAgo(): number
		secondsFromNow(): number
		secondsSince(d: string|number|Date, options?: CreateOptions): number
		secondsUntil(d?: string|number|Date, options?: CreateOptions): number
		set(set: Object, reset?: boolean): Date
		set(milliseconds: number): Date
		set(year: number, month: number, day?: number, hour?: number, minute?: number, second?: number, millliseconds?: undefined): Date
		setISOWeek(num: number): void
		setUTC(on?: boolean): Date
		setWeekday(dow: number): void
		short(localeCode?: string): string
		weeksAgo(): number
		weeksFromNow(): number
		weeksSince(d: string|number|Date, options?: CreateOptions): number
		weeksUntil(d?: string|number|Date, options?: CreateOptions): number
		yearsAgo(): number
		yearsFromNow(): number
		yearsSince(d: string|number|Date, options?: CreateOptions): number
		yearsUntil(d?: string|number|Date, options?: CreateOptions): number
	}
}
