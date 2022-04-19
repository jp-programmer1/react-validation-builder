/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.min.css';
import { ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';
import '../../lib/styles/styles.css';
/**
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentRemove integrate remove item component
 * @returns {JSX.Element}
 * @constructor
 */
declare const ValidationBuilderEditor: ({ data, onChange, className }: ValidationBuilderEditorInterface) => JSX.Element;
export default ValidationBuilderEditor;
