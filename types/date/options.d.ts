export interface Locale {
	addFormat(src: string, to?: readonly string[]): void
	getDuration(ms: number): string
	getFirstDayOfWeek(): number
	getFirstDayOfWeekYear(): number
	getMonthName(num: number): string
	getWeekdayName(num: number): string
}
export interface Options {
	newDateInternal: () => Date
}

export interface CreateOptions {
	locale?: string
	past?: boolean
	future?: boolean
	fromUTC?: boolean
	setUTC?: boolean
	clone?: boolean
	params?: { [param: string]: string | number }
}
