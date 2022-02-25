/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchemaValidateInterface } from './interfaces/JsonSchemaValidateInterface';
import '../lib/styles/styles.css';
/**
 * @param data this property receives {jsonSchema, errors}. default {}
 * @param onChange function that returns a object and list ({jsonSchema, errors), arrayList) => void;
 * @param className set container className
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param showList view Table
 * @param
 * @param id set container id

 * @returns {JSX.Element}
 * @constructor
 */
declare const JsonSchemaValidate: ({ data, onChange, className, iconClassCollapseUp, iconClassCollapseDown, iconClassRemove, iconClassEdit, id, showList }: JsonSchemaValidateInterface) => JSX.Element;
export default JsonSchemaValidate;
