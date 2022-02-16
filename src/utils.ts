import { JsonSchema } from "./interfaces/JsonSchemaInterface";

export const defaultSchema = ({
  type: 'object',
  title: 'root',
  properties: {
    input1: { type: 'string' }
  }
});

export const parseList = (props:JsonSchema) => {
  let list:any = [];



  return list;
}

export const optionsType = [
  { value: undefined, label: "Select Type" },
  { value: "string", label: "Text" },
  { value: "number", label: "Number" },
  { value: "integer", label: "Integer" },
  { value: "boolean", label: "Yes/No" }
];

export const optionsFormat = [
  { value: "date-time", label: "Date Time" },
  { value: "date", label: "Date" },
  { value: "email", label: "Email" },
  { value: "hostname", label: "Host Name" },
  { value: "ipv4", label: "ipv4" },
  { value: "ipv6", label: "ipv6" },
  { value: "uri", label: "uri" },
];