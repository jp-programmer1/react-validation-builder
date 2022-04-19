export declare const optionsType: {
    label: string;
    value: string;
}[];
export declare const types: {
    string: ({
        name: string;
        fieldType: string;
        key?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
    })[];
    number: ({
        name: string;
        fieldType: string;
        key?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
    })[];
    date: ({
        name: string;
        fieldType: string;
        key?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
    })[];
    boolean: {
        name: string;
        fieldType: string;
    }[];
};
export declare const parseToProperties: (values: any) => {
    properties: {};
    required: any;
    errors: {};
    key: any;
};
export declare const searchKeyData: (data: any, key: any) => object;
export declare const getList: (values: any, errors: any) => object[];
