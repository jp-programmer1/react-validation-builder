import React from 'react'

const JsonSchemaValidateEdit: React.FC<{value:any, onChange:Function}> = ({value, onChange}) => {
  return (
    <div className="editor-container">
      <input placeholder="name field" type="text" />
    </div>
  );
}

export default JsonSchemaValidateEdit;
