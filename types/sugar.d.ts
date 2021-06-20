import type { Array, Date, Function, Number, Object, RegExp, String } from './namespaces'

type GlobalThis = typeof globalThis
type Constructor<T = any> = { new(...args: any[]): T }

type NativeConstructorName = Exclude<{
	[K in keyof GlobalThis]: GlobalThis[K] extends Constructor ? K : never
}[keyof GlobalThis], 'undefined' | 'exports'>

type NativeConstructor = GlobalThis[NativeConstructorName]

export interface ExtendOptions<T extends SugarNamespace<Constructor>> {
	methods?: Extract<keyof T, string>[]
	except?: Extract<keyof T, string>[]
	enhance?: boolean
}

export interface SugarExtendOptions {
	except?: NativeConstructor[]
	namespaces?: NativeConstructor[]
	enhance?: boolean
	enhanceString?: boolean
	enhanceArray?: boolean
	objectPrototype?: boolean
}

export default interface Sugar {
	(opts?: SugarExtendOptions): this
	createNamespace<K extends NativeConstructorName>(name: K): SugarNamespace<GlobalThis[K]>
	extend(opts?: SugarExtendOptions): this
	Array: Array.Constructor
	Date: Date.Constructor
	Function: Function.Constructor
	Number: Number.Constructor
	Object: Object.Constructor
	RegExp: RegExp.Constructor
	String: String.Constructor
}

type DefineFn<T extends Constructor> = (this: SugarNamespace<T>, native: InstanceType<T>, ...args: any[]) => any
type DefinePolyfillFn<T extends Constructor> = (this: InstanceType<T>, ...args: any[]) => any
type DefineStaticFn<T extends Constructor> = (this: T, ...args: any[]) => any

type FnLastArg<F extends (...args: any[]) => any> = Parameters<F> extends [...infer _, infer Last] ? Last : never
type LastArgIsArray<F extends (...args: any[]) => any> = FnLastArg<F> extends any[] ? F : never

export interface SugarNamespace<T extends Constructor> {
	alias(toName: string, from: (keyof this) | Function): this
	defineInstance(methods: { [name: string]: DefineFn<T> }): this
	defineInstance(methodName: string, methodFn: DefineFn<T>): this
	defineInstanceAndStatic(methods: { [name: string]: DefineFn<T> }): this
	defineInstanceAndStatic(methodName: string, methodFn: DefineFn<T>): this
	defineInstancePolyfill(methods: { [name: string]: DefinePolyfillFn<T> }): this
	defineInstancePolyfill(methodName: string, methodFn: DefinePolyfillFn<T>): this
	defineInstanceWithArguments<F extends DefineFn<T>>(methods: { [name: string]: LastArgIsArray<F> }): this
	defineInstanceWithArguments<F extends DefineFn<T>>(methodName: string, methodFn: LastArgIsArray<F>): this
	defineStatic(methods: { [name: string]: DefineStaticFn<T> }): this
	defineStatic(methodName: string, methodFn: DefineStaticFn<T>): this
	defineStaticPolyfill(methods: { [name: string]: DefineStaticFn<T> }): this
	defineStaticPolyfill(methodName: string, methodFn: DefineStaticFn<T>): this
	defineStaticWithArguments<F extends DefineStaticFn<T>>(methods: { [name: string]: LastArgIsArray<F> }): this
	defineStaticWithArguments<F extends DefineStaticFn<T>>(methodName: string, methodFn: LastArgIsArray<F>): this
	extend(opts?: ExtendOptions<this>): this
}
