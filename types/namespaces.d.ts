import * as Array from './array'
import * as Date from './date'
import * as Function from './function'
import * as Number from './number'
import * as Object from './object'
import *  as RegExp from './regexp'
import * as String from './string'
export { default as Range } from './range'

export { Array, Date, Function, Number, Object, RegExp, String }

export type UnknownChainable<Raw = unknown> =
	Raw extends string ? String.Chainable<Raw> :
	Raw extends RegExp ? RegExp.Chainable<Raw> :
	Raw extends number ? Number.Chainable<Raw> :
	Raw extends Date   ? Date.Chainable<Raw> :
	Raw extends any[]  ? Array.Chainable<Raw[], Raw> :
	Raw extends Function ? Function.Chainable<Raw> :
	Object.Chainable<Raw>
