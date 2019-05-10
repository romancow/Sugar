declare namespace sugarjs {
	namespace Object {

		type resolveFn<T> = (key: string, targetVal: T, sourceVal: T, target: Object, source: Object) => boolean;
		type searchFn<T> = (key: string, val: T, obj: Object) => boolean;
		type mapFn<T, U> = (val: T, key: string, obj: Object) => U;

		interface QueryStringParseOptions<T, U> {
			deep?: boolean;
			auto?: boolean;
			transform?: (key: string, val: T, obj: Object) => U;
			separator?: string;
		}

		interface QueryStringOptions<T, U> {
			deep?: boolean;
			prefix?: string;
			transform?: (key: string, val: T, obj: Object) => U;
			separator?: string;
		}

		interface ObjectMergeOptions<T> {
			deep?: boolean;
			hidden?: boolean;
			descriptor?: boolean;
			resolve?: boolean|resolveFn<T>;
		}

	}
}
