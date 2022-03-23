import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Tag from '../components/Tag';
import { SelectCustom } from '../components/Index';
import { useActionsTag } from '../hooks/useActionsTag';

export const ExtendedConfigEdit = ({ values, onChangeCallback }) => {

  const {options, tags, onAddTag, onRemoveTag, onActivateEdit, onEditTag} = useActionsTag(values, onChangeCallback);
  
  const styles = useMemo(() => (
    { backgroundColor: "#3089DB", color: "white" }
  ), []);

  return (
    <div className="validation-builder-container-tags-select">
     
      <div className="validation-builder-data-tags">
        {tags.length > 0 && tags.map((item, key) => (
          <Tag key={key} styles={styles} name={item.tag} data={item} namekey="tag" />
        ))}
      </div>
      <SelectCustom options={options} name="selectTag" onChange={onAddTag} />
    </div>
  );
}
