

export interface JsonSchemaValidateInterface {
  value: object;
  onChange: (value: object) => void;

  componentOnCollapse?: JSX.Element;
  componentOffCollapse?: JSX.Element;
  componentRemove?: JSX.Element
  componentAdd?: JSX.Element

  className?:string;
  key?:string

}