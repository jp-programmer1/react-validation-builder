
export interface ValidationBuilderEditorInterface {
  data: any;
  onChange: (value: any, arrayList:any) => void;
  className?:string;
}
// "string" | "number" | "integer" | "boolean";
//"date-time" | "date" | "hostname" | "email" | "ipv4" | "ipv6" | "uri";
export interface ValuesInterface {
  name?:string;
  required?:Array<string>;
  type?: any;
  format?: any;
  pattern?:any
  minLength?:number;
  maxLength?:number;
  enum?:Array<string | number>;
  exclusiveMinimum?:boolean;
  exclusiveMaximum?:boolean;
  minimum?:number;
  maximum?:number;
  messageError?:string
}