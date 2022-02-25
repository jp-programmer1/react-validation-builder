/// <reference types="react" />
interface Actions {
    value: string;
    onClick?: () => void;
    icon?: string;
    component?: () => JSX.Element;
}
interface Props {
    FieldRender?: () => JSX.Element;
    options?: Array<object>;
    values?: any;
    color?: string;
    name: string;
    activateEdit?: boolean;
    onFinishedEdit?: () => void;
    actions?: Array<Actions>;
    onEditFieldRender?: (name: any) => void;
}
declare const BadgeInput: ({ FieldRender, onEditFieldRender, options, values, color, name, activateEdit, actions }: Props) => JSX.Element;
export default BadgeInput;
