/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.min.css';
import { JsonSchemaValidateInterface } from './interfaces/JsonSchemaValidateInterface';
import '../lib/styles/styles.css';
/**
 * @param data the json schema object
 * @param onChange function that returns a jsonschema
 * @param className set container className
 * @param componentAdd integrate add item component
 * @param componentOffCollapse integrate component when collapsed is false
 * @param componentOnCollapse integrate component when collapsed is true
 * @param componentRemove integrate remove item component
 * @param id set container id
 * @param getList function that returns a properties list in array object
 * @returns {JSX.Element}
 * @constructor
 */
declare const JsonSchemaValidate: ({ data, onChange, className, componentAdd, componentOffCollapse, componentOnCollapse, componentRemove, id, getList }: JsonSchemaValidateInterface) => JSX.Element;
export default JsonSchemaValidate;
