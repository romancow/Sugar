export {}

declare global {
	interface RegExpConstructor {
		escape(str?: string): string
	}

	interface RegExp {
		addFlags(flags: string): RegExp
		getFlags(): string
		removeFlags(flags: string): RegExp
		setFlags(flags: string): RegExp
	}
}
