
import React from "react";

const Dropdown = (props)=>{
   
return <select>
    {props.list.map((item,index)=>{
        return <option value ={index}>{item}</option>
    })}
  
</select>
};
export default Dropdown;