import type { SugarNamespace } from '../sugar'
import type Chainable from './chainable'

export default interface Constructor extends SugarNamespace<FunctionConstructor> {
	(raw?: Function): Chainable
	new(raw?: Function): Chainable
	after(instance: Function, n: number): Function
	cancel(instance: Function): Function
	debounce(instance: Function, ms?: number): Function
	delay(instance: Function, ms?: number, ...args: any[]): Function
	every(instance: Function, ms?: number, ...args: any[]): Function
	lazy(instance: Function, ms?: number, immediate?: boolean, limit?: number): Function
	lock(instance: Function, n?: number): Function
	memoize(instance: Function, hashFn?: string|Function, limit?: number): Function
	once(instance: Function): Function
	partial(instance: Function, ...args: any[]): Function
	throttle(instance: Function, ms?: number): Function
}
