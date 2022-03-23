import React, { useCallback, useEffect, useState } from 'react'
import { SelectCustom } from './Index';

interface data {
  editing: boolean;
  tag: string;
  value: any
}
interface Props {
  styles?: object
  name: string;
  data: data;
  namekey:string
  onClickTag?: (e:any) => void;
}

const Tag = ({ data, styles, name, onClickTag, namekey}: Props) => {
  console.log(data);
  
  return (
    <div id={name} className="validation-builder-badge-container">
     
        <React.Fragment>
          {data &&
            <div className="validation-builder-badge validation-builder-grid" style={{ ...styles }}>
              <div onClick={() => onClickTag && onClickTag(data)}>
                {data[namekey]}
              </div>
              {/* <div className=""></div>
              <div className="validation-builder-item-message">
                  <i className="fas fa-comment-alt" style={{opacity: data.value.message && data.value.message !== "" ? 1 : 0.60}}></i>
              </div>
              <div>
                <i className="fas fa-times"></i>
              </div> */}
            </div>
          }
        </React.Fragment>
    </div>
  )
}

export default Tag;
