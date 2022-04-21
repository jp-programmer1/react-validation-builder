import React, { useState } from "react";
interface DropdownActionInterface{
  children:JSX.Element;
  iconComponent: JSX.Element;
  onFinished: () => void; 
}
export const DropdownAction = ({ children, iconComponent, onFinished }: DropdownActionInterface) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="validation-builder-container-dropdown">
      <div className="dropdown">
        <div className={`dropdown-toogle ${edit ? 'show' : ''}`}
          onClick={() => {
            if (edit) onFinished();
            setEdit(!edit);
          }}
        >
          {iconComponent}
        </div>
        <div className={`validation-builder-container-dropdown-menu dropdown-menu ${edit ? 'show' : ''}`}>
          <div className="validation-builder-field-action">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}