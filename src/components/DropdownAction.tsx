import React, { useEffect, useState } from "react";
interface DropdownActionInterface {
  children: JSX.Element;
  iconComponent: JSX.Element;
  onFinished: () => void;
  onClose?: (e: any) => void;
}
export const DropdownAction = ({ children, iconComponent, onFinished, onClose }: DropdownActionInterface) => {
  const [edit, setEdit] = useState(false);

  const child = React.Children.map(children, (c, index) => {
    return React.cloneElement(c, {
      ...c.props,
      onEnter: (e:any) => {
        if(e.key === "Enter"){
          onFinished();
          setEdit(false);
        }
      }
    })
  });
  
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
            {child}
          </div>
        </div>
      </div>
    </div>
  );
}