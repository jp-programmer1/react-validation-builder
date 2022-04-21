
#  react-validation-builder
Easy to use validation editor.

## Installation
```
$ npm install react-validation-builder
$ yarn add react-validation-builder
```
## Integration
```
  import React, { useState } from 'react';
  import { ValidationBuilderEditor } from 'react-validation-builder';
  
  const config = {
    addField: { icon: "fas fa-plus", text: " Add" },
    removeField: { icon: "fas fa-times" },
    message: { icon: "fas fa-comment", styles: { color: "black" } },
    removeTag: { icon: "fas fa-times" },
    valueStringTag: { icon: "fas fa-cog" },
    valueDateTag: { icon: "fas fa-calendar" },
  }
  const pillStyles = {
    pillType: {backgroundColor: "green", color: "white"},
    pillTag: {backgroundColor: "blue", color: "white"}
  }
  
  const App = () => {
    const [schema, setSchema] = useState(schema);

    const onChange = useCallback((val) => {
      setschema(val);
    }, []);

    return (
	    <ValidationBuilderEditor data={schema} onChange={onChange} config={config} pillStyles={pillStyles}/>
    );
  }
```
### Functionality to transform the schema to Yup
```
  import { transformSchemaToYup } from 'react-validation-builder';
  const schemaYup = transformSchemaToYup(schema);
```

### component for bootstrap
```
  import { ValidationBuilderEditor } from 'react-validation-builder/lib/bootstrap';
```
## Contributors 👽
### Code Contributors
![jpprogrammer](https://avatars.githubusercontent.com/u/52465504?s=56&)
![andresceccoli](https://avatars.githubusercontent.com/u/7004266?s=56&)
### Financial Contributors
<img src="https://app.sitrack.io/static/media/sitrack_color.22c61360.svg" alt="drawing" style="width:200px;"/>

## License

Licensed under MIT
