import React from "react";
import { InputCustom } from "../components/Index";

const FieldMessage = ({ onChange, value }) => <InputCustom name="message" onChange={onChange} value={value} />
const FieldNumber = ({ name, onChange, value }) => <InputCustom type="number" name={name} onChange={onChange} value={value} />
const FieldString = ({ name, onChange, value }) => <InputCustom name={name} onChange={onChange} value={value} />
const FieldDate = ({ name, onChange, value }) => <InputCustom type="date" name={name} onChange={onChange} value={value} />


const getField = (type) => {

}