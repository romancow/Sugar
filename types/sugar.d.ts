declare namespace sugarjs {

	type SugarDefaultChainable<RawValue> =
		Array.Chainable<any, RawValue> &
		Date.Chainable<RawValue> &
		Function.Chainable<RawValue> &
		Number.Chainable<RawValue> &
		Object.Chainable<RawValue> &
		RegExp.Chainable<RawValue> &
		String.Chainable<RawValue>;

	type NativeConstructor =
		ArrayConstructor |
		DateConstructor |
		FunctionConstructor |
		NumberConstructor |
		ObjectConstructor |
		RegExpConstructor |
		StringConstructor |
		BooleanConstructor |
		ErrorConstructor;

	interface ExtendOptions {
		methods?: Array<string>;
		except?: Array<string|NativeConstructor>;
		namespaces?: Array<NativeConstructor>;
		enhance?: boolean;
		enhanceString?: boolean;
		enhanceArray?: boolean;
		objectPrototype?: boolean;
	}

	interface Sugar {
		(opts?: ExtendOptions): Sugar;
		createNamespace(name: string): SugarNamespace;
		extend(opts?: ExtendOptions): Sugar;
		Array: Array.Constructor;
		Date: Date.Constructor;
		Function: Function.Constructor;
		Number: Number.Constructor;
		Object: Object.Constructor;
		RegExp: RegExp.Constructor;
		String: String.Constructor;
	}

	interface SugarNamespace {
		alias(toName: string, from: string|Function): this;
		alias(toName: string, fn: undefined): this;
		defineInstance(methods: Object): this;
		defineInstance(methodName: string, methodFn: Function): this;
		defineInstanceAndStatic(methods: Object): this;
		defineInstanceAndStatic(methodName: string, methodFn: Function): this;
		defineInstancePolyfill(methods: Object): this;
		defineInstancePolyfill(methodName: string, methodFn: Function): this;
		defineInstanceWithArguments(methods: Object): this;
		defineInstanceWithArguments(methodName: string, methodFn: Function): this;
		defineStatic(methods: Object): this;
		defineStatic(methodName: string, methodFn: Function): this;
		defineStaticPolyfill(methods: Object): this;
		defineStaticPolyfill(methodName: string, methodFn: Function): this;
		defineStaticWithArguments(methods: Object): this;
		defineStaticWithArguments(methodName: string, methodFn: Function): this;
		extend(opts?: ExtendOptions): this;
	}

}
