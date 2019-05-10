declare namespace sugarjs {
    namespace RegExp {

        interface Constructor extends SugarNamespace {
            (raw?: RegExp): Chainable<RegExp>;
            new(raw?: RegExp): Chainable<RegExp>;
            escape(str?: string): string;
            addFlags(instance: RegExp, flags: string): RegExp;
            getFlags(instance: RegExp): string;
            removeFlags(instance: RegExp, flags: string): RegExp;
            setFlags(instance: RegExp, flags: string): RegExp;
        }

    }
}