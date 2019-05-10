declare namespace sugarjs {

	interface Range {
		clamp<T>(el: T): T;
		clone(): Range;
		contains<T>(el: T): boolean;
		days(): number;
		every<T>(amount: string|number, everyFn?: (el: T, i: number, r: Range) => void): T[];
		hours(): number;
		intersect(range: Range): Range;
		isValid(): boolean;
		milliseconds(): number;
		minutes(): number;
		months(): number;
		seconds(): number;
		span(): number;
		toArray<T>(): T[];
		toString(): string;
		union(range: Range): Range;
		weeks(): number;
		years(): number;
	}

}
