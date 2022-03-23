
#  react-jsonschema-validate-edit
Easy to use json schema validation editor.

##  Usage

`npm install react-jsonschema-validate-edit`

  

    import  React, { useState } from 'react';
    import { JsonSchemaValidateEdit } from 'react-jsonschema-validate-edit';
    
    const Component = () => {
	    const [jsonSchema, setJsonSchema] = useState({});
	    
	    return (
		    <JsonSchemaValidateEdit value={values} onChange={setJsonSchema} />
	    );
	  }

## Example
´´´
const schema = {
  person: {
    type: "string",
    required: {required: true, message: "Este campo es requerido"},
    min: { limit: 2, message: "Hello" },
    fieldKey: "person"
  },
  phone: {
    type: "number",
    required: {required: true, message: "Este campo es requerido"},
    fieldKey: "phone"
  }
};
´´´