export declare const optionsType: {
    label: string;
    value: string;
}[];
export declare const types: {
    string: ({
        name: string;
        fieldType: string;
        key?: undefined;
        deps?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
        deps?: undefined;
    } | {
        name: string;
        fieldType: string;
        deps: string[];
        key?: undefined;
    })[];
    number: ({
        name: string;
        fieldType: string;
        key?: undefined;
        deps?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
        deps?: undefined;
    } | {
        name: string;
        fieldType: string;
        deps: string[];
        key?: undefined;
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
    boolean: ({
        name: string;
        fieldType: string;
        key?: undefined;
    } | {
        name: string;
        key: string;
        fieldType: string;
    })[];
};
