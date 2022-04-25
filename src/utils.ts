
export const optionsType = [
  { label: "Text", value: "string" },
  { label: "Number", value: "number" },
  { label: "Date", value: "date" },
  { label: "Yes/No", value: "boolean" },
];
export const types = {
  "string": [
    { name: "required", fieldType: "boolean" },
    { name: "min", key: "limit", fieldType: "number" },
    { name: "max", key: "limit", fieldType: "number" },
    { name: "matches", key: "regex", fieldType: "string" },
    { name: "email", fieldType: "boolean" },
    { name: "url", fieldType: "boolean" },
    { name: "uuid", fieldType: "boolean" },
    { name: "trim", fieldType: "boolean" },
    { name: "lowercase", fieldType: "boolean" },
    { name: "uppercase", fieldType: "boolean" }
  ],
  "number": [
    { name: "required", fieldType: "boolean" },
    { name: "min", key: "limit", fieldType: "number" },
    { name: "max", key: "limit", fieldType: "number" },
    { name: "lessThan", key: "max", fieldType: "number" },
    { name: "moreThan", key: "min", fieldType: "number" },
    { name: "positive", fieldType: "boolean" },
    { name: "negative", fieldType: "boolean" },
    { name: "integer", fieldType: "boolean" },
  ],
  "date": [
    { name: "required", fieldType: "boolean" },
    { name: "min", key: "limit", fieldType: "date" },
    { name: "max", key: "limit", fieldType: "date" }
  ],
  "boolean": [
    { name: "required", fieldType: "boolean" },
  ]
}

export const parseToProperties = (values) => {
  let schema = { properties: {} };
  let errors = {};
  let required;
  let key;
  if (values.name) {
    key = values.name;

    if (values.required) {
      required = values.name;
      delete values.required;
    }
    delete values.name;

    if (values.messageError) {
      let message = values.messageError;
      delete values.messageError;
      errors = { [key]: message };
    }
    schema.properties = { [key]: { ...values } };
    // @ts-ignore
    if (schema.properties[key] && schema.properties[key].enum) {
      // @ts-ignore
      schema.properties[key].enum = parseToArrayEnum(schema.properties[key].enum);
    }
  }

  return { properties: schema.properties, required, errors, key };
}

export const searchKeyData = (data, key) => {
  let parseData: object = {};
  let schema = data.jsonSchema;
  let errors = data.errors;
  let properties = schema.properties;
  let required = schema.required || [];

  if (properties[key]) {
    if (properties[key]) {
      parseData = {
        ...properties[key], name: key,
        enum: parseToObjectEnum(properties[key].enum),
        required: required.some((r: string) => r === key),
        messageError: errors[key] ? errors[key] : ""
      };
    }
  }

  return parseData;
}

export const getList = (values: any, errors: any) => {
  let list: Array<object> = [];
  let properties = values.properties;
  let required = values.required || [];

  for (const key in properties) {
    list.push({ ...properties[key], name: key, required: required.some((r: string) => r === key), messageError: errors[key] })
  }

  return list;
}

const parseToArrayEnum = (value: string) => {
  let enumList: Array<string> = [];
  if (value) {
    value.split(',').map((v: string) => {
      v.trim();
      enumList.push(v);
    });
  }
  return enumList;
}

const parseToObjectEnum = (value: Array<string> = []) => {
  let data: string = ""
  if (value.length > 0) {
    let cont = value.length - 1;
    value.forEach((v: string, index) => {
      data += `${v}${index === cont ? '' : ','}`;
    });
  }
  return data;
}