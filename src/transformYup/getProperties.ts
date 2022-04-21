
export const getProperties = (data) => {
  //@ts-ignore
  let values:Array<any> = Object.values(data);
  let props = "";
  if(values[1]){
    props += `${values[1]}${values[0] ? `,'${values[0]}'` : ''}`;
  }else{
    props += `'${values[0]}'`;
  }
  return props;
}