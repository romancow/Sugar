import type { ChainableWith } from '../object/chainable'
import type { String, Object } from '../namespaces'

type Chainable<Raw extends RegExp = RegExp> = ChainableWith<Raw, {
	addFlags(flags: string): Chainable
	getFlags(): String.Chainable
	removeFlags(flags: string): Chainable
	setFlags(flags: string): Chainable
	exec(string: string): Object.Chainable<RegExpExecArray | null>
	test(string: string): Object.Chainable<boolean>
}>
export default Chainable
