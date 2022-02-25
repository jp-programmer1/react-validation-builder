
export const optionsType = [{name: "string"}, {name: "number"}, {name: "date"}, {name: "boolean"}];

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