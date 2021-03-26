import type * as sugarjs from '../namespaces'

declare global {
	interface NumberConstructor {
		random(n1?: number, n2?: number): number
		range(start?: number, end?: number): sugarjs.Range
	}

	interface Number {
		abbr(precision?: number): string
		abs(): number
		acos(): number
		asin(): number
		atan(): number
		bytes(precision?: number, binary?: boolean, units?: string): string
		cap(max?: number): number
		ceil(precision?: number): number
		chr(): string
		clamp(start?: number, end?: number): number
		cos(): number
		day(): number
		dayAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		dayAgo(): Date
		dayBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		dayFromNow(): Date
		days(): number
		daysAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		daysAgo(): Date
		daysBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		daysFromNow(): Date
		downto<T>(num: number, step?: number, everyFn?: (el: T, i: number, r: sugarjs.Range) => void): T[]
		downto<T>(num: number, everyFn?: (el: T, i: number, r: sugarjs.Range) => void): T[]
		duration(localeCode?: string): string
		exp(): number
		floor(precision?: number): number
		format(place?: number): string
		hex(pad?: number): string
		hour(): number
		hourAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		hourAgo(): Date
		hourBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		hourFromNow(): Date
		hours(): number
		hoursAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		hoursAgo(): Date
		hoursBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		hoursFromNow(): Date
		isEven(): boolean
		isInteger(): boolean
		isMultipleOf(num: number): boolean
		isOdd(): boolean
		log(base?: number): number
		metric(precision?: number, units?: string): string
		millisecond(): number
		millisecondAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		millisecondAgo(): Date
		millisecondBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		millisecondFromNow(): Date
		milliseconds(): number
		millisecondsAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		millisecondsAgo(): Date
		millisecondsBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		millisecondsFromNow(): Date
		minute(): number
		minuteAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		minuteAgo(): Date
		minuteBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		minuteFromNow(): Date
		minutes(): number
		minutesAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		minutesAgo(): Date
		minutesBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		minutesFromNow(): Date
		month(): number
		monthAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		monthAgo(): Date
		monthBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		monthFromNow(): Date
		months(): number
		monthsAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		monthsAgo(): Date
		monthsBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		monthsFromNow(): Date
		ordinalize(): string
		pad(place?: number, sign?: boolean, base?: number): string
		pow(): number
		round(precision?: number): number
		second(): number
		secondAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		secondAgo(): Date
		secondBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		secondFromNow(): Date
		seconds(): number
		secondsAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		secondsAgo(): Date
		secondsBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		secondsFromNow(): Date
		sin(): number
		sqrt(): number
		tan(): number
		times<T>(indexMapFn: (i: number) => any): T
		toNumber(): number
		upto<T>(num: number, step?: number, everyFn?: (el: T, i: number, r: sugarjs.Range) => void): T[]
		upto<T>(num: number, everyFn?: (el: T, i: number, r: sugarjs.Range) => void): T[]
		week(): number
		weekAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		weekAgo(): Date
		weekBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		weekFromNow(): Date
		weeks(): number
		weeksAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		weeksAgo(): Date
		weeksBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		weeksFromNow(): Date
		year(): number
		yearAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		yearAgo(): Date
		yearBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		yearFromNow(): Date
		years(): number
		yearsAfter(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		yearsAgo(): Date
		yearsBefore(d: string|number|Date, options?: sugarjs.Date.DateCreateOptions): Date
		yearsFromNow(): Date
	}
}
