declare namespace sugarjs {
	namespace Object {

		type Chainable<RawValue> = ChainableBase<RawValue>;

		interface ChainableBase<RawValue> {
			raw: RawValue;
			valueOf: () => RawValue;
			toString: () => string;
			add<T>(obj: Object, options?: ObjectMergeOptions<T>): SugarDefaultChainable<Object>;
			addAll<T>(sources: Array<Object>, options?: ObjectMergeOptions<T>): SugarDefaultChainable<Object>;
			average<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>;
			clone(deep?: boolean): SugarDefaultChainable<Object>;
			count<T>(search: T|searchFn<T>): SugarDefaultChainable<number>;
			defaults<T>(sources: Array<Object>, options?: ObjectMergeOptions<T>): SugarDefaultChainable<Object>;
			every<T>(search: T|searchFn<T>): SugarDefaultChainable<boolean>;
			exclude<T>(search: T|searchFn<T>): SugarDefaultChainable<Object>;
			filter<T>(search: T|searchFn<T>): SugarDefaultChainable<T[]>;
			find<T>(search: T|searchFn<T>): SugarDefaultChainable<boolean>;
			forEach<T>(eachFn: (val: T, key: string, obj: Object) => SugarDefaultChainable<void>): SugarDefaultChainable<Object>;
			get<T>(key: string, inherited?: boolean): SugarDefaultChainable<T>;
			has(key: string, inherited?: boolean): SugarDefaultChainable<boolean>;
			intersect(obj: Object): SugarDefaultChainable<Object>;
			invert(multi?: boolean): SugarDefaultChainable<Object>;
			isArguments(): SugarDefaultChainable<boolean>;
			isArray(): SugarDefaultChainable<boolean>;
			isBoolean(): SugarDefaultChainable<boolean>;
			isDate(): SugarDefaultChainable<boolean>;
			isEmpty(): SugarDefaultChainable<boolean>;
			isEqual(obj: Object): SugarDefaultChainable<boolean>;
			isError(): SugarDefaultChainable<boolean>;
			isFunction(): SugarDefaultChainable<boolean>;
			isMap(): SugarDefaultChainable<boolean>;
			isNumber(): SugarDefaultChainable<boolean>;
			isObject(): SugarDefaultChainable<boolean>;
			isRegExp(): SugarDefaultChainable<boolean>;
			isSet(): SugarDefaultChainable<boolean>;
			isString(): SugarDefaultChainable<boolean>;
			keys<T>(): SugarDefaultChainable<T[]>;
			least<T, U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			least<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			map<T, U>(map: string|mapFn<T, U>): SugarDefaultChainable<Object>;
			max<T, U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			max<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			median<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>;
			merge<T>(source: Object, options?: ObjectMergeOptions<T>): SugarDefaultChainable<Object>;
			mergeAll<T>(sources: Array<Object>, options?: ObjectMergeOptions<T>): SugarDefaultChainable<Object>;
			min<T, U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			min<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			most<T, U>(all?: boolean, map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			most<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<T>;
			none<T>(search: T|searchFn<T>): SugarDefaultChainable<boolean>;
			reduce<T>(reduceFn: (acc: T, val: T, key: string, obj: Object) => SugarDefaultChainable<void>, init?: any): SugarDefaultChainable<T>;
			reject(find: string|RegExp|Array<string>|Object): SugarDefaultChainable<Object>;
			remove<T>(search: T|searchFn<T>): SugarDefaultChainable<Object>;
			select(find: string|RegExp|Array<string>|Object): SugarDefaultChainable<Object>;
			set<T>(key: string, val: T): SugarDefaultChainable<Object>;
			size(): SugarDefaultChainable<number>;
			some<T>(search: T|searchFn<T>): SugarDefaultChainable<boolean>;
			subtract(obj: Object): SugarDefaultChainable<Object>;
			sum<T, U>(map?: string|mapFn<T, U>): SugarDefaultChainable<number>;
			tap(tapFn: (obj: Object) => SugarDefaultChainable<any>): SugarDefaultChainable<Object>;
			toQueryString<T, U>(options?: QueryStringOptions<T, U>): SugarDefaultChainable<Object>;
			values<T>(): SugarDefaultChainable<T[]>;
		}

	}
}
