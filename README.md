
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
| data | JsonSchema | undefined | the json schema object |
| onChange | Function Callback |  | function that returns a jsonschema |
| className | string | null |  container className |
| id | string | null  | set container id |
| componentOnCollapse | JSX |  | integrate component when collapsed is true |
| componentOffCollapse | JSX |  | integrate component when collapsed is false |
| componentRemove | JSX |  | integrate remove item component|
| componentAdd | JSX |  | integrate add item component |
| getList | array |  | function that returns a properties list in array object |
| showList | boolean | true | show list when adding items |
| removeItem | string |  | receives the name of the value you want to remove |
| onFinishedRemoveItem | Function Callback |  | function that warns that I delete an element |
