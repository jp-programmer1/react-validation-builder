
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

## Properties
| name | type | default | description |
|--|----------|------------|-------------|
| value | object | undefined | the json schema object |
| onChange | Function Callback | null | function that returns a jsonschema |
| className | string | null |  container className |
| key | string | null  |
| componentOnCollapse | JSX | undefined | integrate component when collapsed is true |
| componentOffCollapse | JSX | undefined | integrate component when collapsed is false |
| componentRemove | JSX | undefined | integrate remove item component|
| componentAdd | JSX | undefined | integrate add item component |
