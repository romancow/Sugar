import type ObjectChainable from '../object/chainable'
import type { SugarDefaultChainable } from '../sugar'

type Chainable<RawValue> = ChainableBase<RawValue> & ObjectChainable<RawValue>

export default Chainable

export interface ChainableBase<RawValue> {
	raw: RawValue
	valueOf: () => RawValue
	toString: () => string
	addFlags(flags: string): SugarDefaultChainable<RegExp>
	getFlags(): SugarDefaultChainable<string>
	removeFlags(flags: string): SugarDefaultChainable<RegExp>
	setFlags(flags: string): SugarDefaultChainable<RegExp>
	exec(string: string): SugarDefaultChainable<RegExpExecArray | null>
	test(string: string): SugarDefaultChainable<boolean>
}
