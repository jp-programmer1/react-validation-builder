/// <reference types="react" />
import { ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';
import '../../lib/styles/styles.css';
/**
 * @param onChange function that returns a object and list (schema) => void;
 * @param className set container className
 * @param config object ->
  addField?: { icon: string, text: string, styles: object }
  removeField?: { icon: string, text: string, styles: object }
  message?: { icon: string, text: string, styles: object }
  removeTag?: { icon: string, text: string, styles: object }
  valueStringTag?: { icon: string, text: string, styles: object }
  valueNumberTag?: { icon: string, text: string, styles: object }
  valueDateTag?: { icon: string, text: string, styles: object }
 * @param pillStyles object ->
    pillType: object
    pillTag: object
 * @returns {JSX.Element}
 * @constructor
 */
export declare const ValidationBuilderEditor: ({ data, onChange, className, config, pillStyles }: ValidationBuilderEditorInterface) => JSX.Element;
