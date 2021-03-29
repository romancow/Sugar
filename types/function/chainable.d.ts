import type { ChainableWith } from '../object/chainable'
import type { UnknownChainable } from '../namespaces'

type Chainable<Raw extends Function = Function> = ChainableWith<Raw, {
	after(n: number): Chainable
	cancel(): Chainable
	debounce(ms?: number): Chainable
	delay(ms?: number, ...args: any[]): Chainable
	every(ms?: number, ...args: any[]): Chainable
	lazy(ms?: number, immediate?: boolean, limit?: number): Chainable
	lock(n?: number): Chainable
	memoize(hashFn?: string|Function, limit?: number): Chainable
	once(): Chainable
	partial(...args: any[]): Chainable
	throttle(ms?: number): Chainable
	apply<T = unknown>(thisArg: any, argArray?: any): UnknownChainable<T>
	bind<T = unknown>(thisArg: any, ...argArray: any[]): UnknownChainable<T>
	call<T = unknown>(thisArg: any, ...argArray: any[]): UnknownChainable<T>
}>
export default Chainable
