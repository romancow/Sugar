import type { ChainableWith } from '../object/chainable'
import type { SugarDefaultChainable } from '../sugar'

type Chainable<Raw extends RegExp = RegExp> = ChainableWith<Raw, {
	addFlags(flags: string): SugarDefaultChainable<RegExp>
	getFlags(): SugarDefaultChainable<string>
	removeFlags(flags: string): SugarDefaultChainable<RegExp>
	setFlags(flags: string): SugarDefaultChainable<RegExp>
	exec(string: string): SugarDefaultChainable<RegExpExecArray | null>
	test(string: string): SugarDefaultChainable<boolean>
}>
export default Chainable
