/// <reference types="react" />
interface data {
    editing: boolean;
    tag: string;
    value: any;
}
interface Props {
    styles?: object;
    name: string;
    data: data;
    namekey: string;
    onClickTag?: (e: any) => void;
}
declare const Tag: ({ data, styles, name, onClickTag, namekey }: Props) => JSX.Element;
export default Tag;
