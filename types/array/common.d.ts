declare namespace sugarjs {
	namespace Array {

		type mapFn<T, U> = (el: T, i: number, arr: T[]) => U;
		type sortMapFn<T, U> = (el: T) => U;
		type searchFn<T> = (el: T, i: number, arr: T[]) => boolean;

		interface ArrayOptions {
			sortIgnore?: RegExp;
			sortIgnoreCase?: boolean;
			sortNatural?: boolean;
			sortOrder?: string;
			sortEquivalents?: Object;
			sortCollate?: Function;
		}
	}
}
