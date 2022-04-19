/// <reference types="react" />
interface Props {
    styles?: object;
    name: string;
    data: any;
    namekey: string;
    onClickTag?: (e: any) => void;
    onRemove: (e: any) => void;
    onEditTag: (value: any) => void;
}
declare const Tag: ({ data, styles, onClickTag, namekey, onRemove, onEditTag }: Props) => JSX.Element;
export default Tag;
