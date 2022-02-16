import { JsonSchema } from "./interfaces/JsonSchemaInterface";
export declare const defaultSchema: {
    type: string;
    title: string;
    properties: {
        input1: {
            type: string;
        };
    };
};
export declare const parseList: (props: JsonSchema) => any;
export declare const optionsType: ({
    value: undefined;
    label: string;
} | {
    value: string;
    label: string;
})[];
export declare const optionsFormat: {
    value: string;
    label: string;
}[];
