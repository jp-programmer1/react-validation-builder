/// <reference types="react" />
import { ConfigInterface } from '../interfaces/ValidationBuilderEditorInterface';
interface Props {
    styles?: object;
    name: string;
    data: any;
    namekey: string;
    onClickTag?: (e: any) => void;
    onRemove: (e: any) => void;
    onEditTag: (value: any) => void;
    classNameField?: string;
    config?: ConfigInterface;
}
declare const Tag: ({ data, styles, onClickTag, namekey, onRemove, onEditTag, classNameField, config }: Props) => JSX.Element;
export default Tag;
