export declare const optionsType: {
    name: string;
}[];
export declare const types: {
    string: {
        name: string;
        key: string;
        fieldType: string;
    }[];
    number: {
        name: string;
        key: string;
        fieldType: string;
    }[];
    date: {
        name: string;
        key: string;
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
