export interface JsonSchemaValidateInterface {
    data: any;
    onChange: (value: any, arrayList: any) => void;
    iconClassRemove?: string;
    iconClassAdd?: string;
    iconClassEdit?: string;
    className?: string;
    id?: string;
}
export interface ValuesInterface {
    name?: string;
    required?: Array<string>;
    type?: any;
    format?: any;
    pattern?: any;
    minLength?: number;
    maxLength?: number;
    enum?: Array<string | number>;
    exclusiveMinimum?: boolean;
    exclusiveMaximum?: boolean;
    minimum?: number;
    maximum?: number;
    messageError?: string;
}
