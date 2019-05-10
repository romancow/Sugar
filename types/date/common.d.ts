declare namespace sugarjs {

	interface Locale {
		addFormat(src:string, to?: Array<string>): void;
		getDuration(ms: number): string;
		getFirstDayOfWeek(): number;
		getFirstDayOfWeekYear(): number;
		getMonthName(n: number): string;
		getWeekdayName(n: number): string;
	}

	namespace Date{
		interface DateOptions {
			newDateInternal: Function;
		}

		interface DateCreateOptions {
			locale?: string;
			past?: boolean;
			future?: boolean;
			fromUTC?: boolean;
			setUTC?: boolean;
			clone?: boolean;
			params?: Object;
		}
	}

}
