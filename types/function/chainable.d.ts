import type ObjectChainable from '../object/chainable'
import type { SugarDefaultChainable } from '../sugar'

type Chainable<RawValue> = ChainableBase<RawValue> & ObjectChainable<RawValue>;

export default Chainable

export interface ChainableBase<RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	after(n: number): SugarDefaultChainable<Function>
	cancel(): SugarDefaultChainable<Function>
	debounce(ms?: number): SugarDefaultChainable<Function>
	delay(ms?: number, ...args: any[]): SugarDefaultChainable<Function>
	every(ms?: number, ...args: any[]): SugarDefaultChainable<Function>
	lazy(ms?: number, immediate?: boolean, limit?: number): SugarDefaultChainable<Function>
	lock(n?: number): SugarDefaultChainable<Function>
	memoize(hashFn?: string|Function, limit?: number): SugarDefaultChainable<Function>
	once(): SugarDefaultChainable<Function>
	partial(...args: any[]): SugarDefaultChainable<Function>
	throttle(ms?: number): SugarDefaultChainable<Function>
	apply(thisArg: any, argArray?: any): SugarDefaultChainable<any>
	bind(thisArg: any, ...argArray: any[]): SugarDefaultChainable<any>
	call(thisArg: any, ...argArray: any[]): SugarDefaultChainable<any>
}
