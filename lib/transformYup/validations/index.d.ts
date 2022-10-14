declare const validations: {
    required: ({ required }: {
        required: any;
    }, validation: any) => any;
    min: ({ min }: {
        min: any;
    }, validation: any) => any;
    max: ({ max }: {
        max: any;
    }, validation: any) => any;
    matches: ({ matches }: {
        matches: any;
    }, validation: any) => any;
    email: ({ email }: {
        email: any;
    }, validation: any) => any;
    url: ({ url }: {
        url: any;
    }, validation: any) => any;
    uuid: ({ uuid }: {
        uuid: any;
    }, validation: any) => any;
    trim: ({ trim }: {
        trim: any;
    }, validation: any) => any;
    lowercase: ({ lowercase }: {
        lowercase: any;
    }, validation: any) => any;
    uppercase: ({ uppercase }: {
        uppercase: any;
    }, validation: any) => any;
    lessThan: ({ lessThan }: {
        lessThan: any;
    }, validation: any) => any;
    moreThan: ({ moreThan }: {
        moreThan: any;
    }, validation: any) => any;
    positive: ({ positive }: {
        positive: any;
    }, validation: any) => any;
    negative: ({ negative }: {
        negative: any;
    }, validation: any) => any;
    integer: ({ integer }: {
        integer: any;
    }, validation: any) => any;
    expression: (props: any, validation: any, resolveExpressionCallback: any) => any;
};
export default validations;
