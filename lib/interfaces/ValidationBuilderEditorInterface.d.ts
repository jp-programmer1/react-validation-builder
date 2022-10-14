export interface ValidationBuilderEditorInterface {
    data: keyof DataInterface;
    onChange: (value: any, arrayList: any) => void;
    className?: string;
    config?: ConfigInterface;
    pillStyles?: {
        pillType: object;
        pillTag: object;
    };
}
export interface ConfigInterface {
    addField?: {
        icon: string;
        text: string;
        styles: object;
    };
    removeField?: {
        icon: string;
        text: string;
        styles: object;
    };
    message?: {
        icon: string;
        text: string;
        styles: object;
    };
    removeTag?: {
        icon: string;
        text: string;
        styles: object;
    };
    valueStringTag?: {
        icon: string;
        text: string;
        styles: object;
    };
    valueNumberTag?: {
        icon: string;
        text: string;
        styles: object;
    };
    valueDateTag?: {
        icon: string;
        text: string;
        styles: object;
    };
}
export interface DataInterface {
    "type": "string" | "boolean" | "date" | "number";
    "required"?: {
        "message"?: string;
    };
    "min"?: {
        "limit": number;
        "message"?: string;
    };
    "fieldKey": string;
    "max"?: {
        "message"?: string;
        "limit": number;
    };
    "uuid"?: {
        "message"?: string;
    };
    "matches"?: {
        "message"?: string;
        "regex"?: string;
    };
    "email"?: {
        "message"?: string;
    };
    "trim"?: {
        "message"?: string;
    };
    "lowercase"?: {
        "message"?: string;
    };
    "url"?: {
        "message"?: string;
    };
    "uppercase"?: {
        "message"?: string;
    };
    "lessThan"?: {
        "message"?: string;
        "max"?: number;
    };
    "moreThan"?: {
        "message"?: string;
        "min"?: number;
    };
    "positive"?: {
        "message"?: string;
    };
    "negative"?: {
        "message"?: string;
    };
    "integer"?: {
        "message"?: string;
    };
    "expression"?: {
        "message"?: string;
        "value"?: string;
    };
}
