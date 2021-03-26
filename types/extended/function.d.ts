export {}

declare global {
	interface Function {
		after(n: number): Function
		cancel(): Function
		debounce(ms?: number): Function
		delay(ms?: number, ...args: any[]): Function
		every(ms?: number, ...args: any[]): Function
		lazy(ms?: number, immediate?: boolean, limit?: number): Function
		lock(n?: number): Function
		memoize(hashFn?: string|Function, limit?: number): Function
		once(): Function
		partial(...args: any[]): Function
		throttle(ms?: number): Function
	}
}
