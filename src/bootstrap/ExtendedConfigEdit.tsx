import React, { useMemo } from 'react';
import Tag from '../components/Tag';
import { SelectCustom } from '../components/Index';
import { useActionsTag } from '../hooks/useActionsTag';

export const ExtendedConfigEdit = ({ values, onChangeCallback, keyComponent }) => {

  const { options, tags, actions, onAddTag, onRemoveTag, onFinishEdit } = useActionsTag(values, onChangeCallback);

  const styles = useMemo(() => (
    { backgroundColor: "#3089DB", color: "white" }
  ), []);

  return (
    <div className="validation-builder-container-tags">
      {tags.length > 0 && tags.map((item, index) => (
        <React.Fragment key={`${item.tag}-${keyComponent}`}>
          <Tag styles={styles} name={item.tag}
            data={actions.find(e => e.tag === item.tag)}
            namekey="tag"
            onRemove={onRemoveTag}
            onEditTag={onFinishEdit}
          />
        </React.Fragment>
      ))}
      <div className="validation-builder-conatainer-select-tag">
        {options.length !== 1 && <SelectCustom options={options} name="selectTag" onChange={onAddTag} />}
      </div>
    </div>
  );
}
