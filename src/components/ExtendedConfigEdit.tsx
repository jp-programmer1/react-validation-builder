import React, { useMemo } from 'react';
import Tag from './Tag';
import { SelectCustom } from './Index';
import { useActionsTag } from '../hooks/useActionsTag';
import { ConfigInterface, ValidationBuilderEditorInterface } from '../interfaces/ValidationBuilderEditorInterface';

interface ExtendedConfigEditInterface {
  values:any;
  onChangeCallback: (e:any) => void;
  keyComponent:string;
  classNameFieldTag:string;
  classNameFieldSelect:string;
  config: {
    stylesTag: object;
    config?: ConfigInterface;
  }
}

export const ExtendedConfigEdit = ({ values, onChangeCallback, keyComponent, classNameFieldTag, classNameFieldSelect, config }: ExtendedConfigEditInterface) => {

  const { options, tags, actions, onAddTag, onRemoveTag, onFinishEdit } = useActionsTag(values, onChangeCallback);
  return (
    <div className={`${classNameFieldTag === "form-control" ? 'd-flex flex-wrap' : "validation-builder-container-tags"}`}>
      {tags.length > 0 && tags.map((item, index) => (
        <div key={`${item.tag}-${keyComponent}`}>
          <Tag styles={config.stylesTag} name={item.tag}
            data={actions.find(e => e.tag === item.tag)}
            namekey="tag"
            onRemove={onRemoveTag}
            onEditTag={onFinishEdit}
            classNameField={classNameFieldTag}
            config={config.config}
          />
        </div>
      ))}
      <div className="validation-builder-conatainer-select-tag">
        {options.length !== 1 && <SelectCustom options={options} name="selectTag" onChange={onAddTag} className={classNameFieldSelect} />}
      </div>
    </div>
  );
}
