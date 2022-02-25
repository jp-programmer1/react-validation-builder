/// <reference types="react" />
interface data {
    editing: boolean;
    tag: string;
    value: any;
}
interface Props {
    options: Array<any>;
    values?: any;
    styles?: object;
    name: string;
    onFinishedEdit?: () => void;
    data?: data;
    onActivateEdit?: (name: string) => void;
    editing: boolean;
    onChange: (value: any) => void;
    onSubmitModal?: (name: any, value: any) => void;
    onRemove?: (name: string) => void;
}
declare const Tag: ({ values, styles, name, onActivateEdit, editing, onChange, options, data, onRemove }: Props) => JSX.Element;
export default Tag;
