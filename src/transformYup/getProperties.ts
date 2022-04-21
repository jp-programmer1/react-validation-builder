
export const getProperties = (data) => {
  let keys: Array<any> = Object.keys(data);
  let props = "";
  let find = keys.find(k => k !== "message");
  
  if(data.message){
    if(find) props += `${data[find]},`;
    props += `'${data.message}'`;
  }else props += `${data[find], ''}`;
  return props;
}