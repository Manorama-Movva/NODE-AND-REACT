import React from 'react';
import Product from './Product';

const ProductList =(props)=>{
    const products=[{name: "iphone",
price:"10000",imageUrl:"https://cdn.vox-cdn.com/thumbor/PDPaybexLzPoXsQAPeC1uvJoxWg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19212737/akrales_190918_3645_0166.jpg"},

{
    name:"samsung",
price : "2000", 
imageUrl:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/galaxy-note-2020-1596655024.jpg?crop=1.00xw:0.893xh;0,0.0522xh&resize=980:*"
},
{
    name:"nokia",
price : "50890", 
imageUrl:"https://ms2.tudocdn.net/220748?w=1000&fit=clip"}

];
const handleClick=(data)=>{
    console.log(data);
    props.handleClick(data);
   
}
    
    
    return <div className="row">
      {products.map((item,index)=>{
          return<Product productDetails = {item}
          handleClick={handleClick}/>
      })}
  </div>
}
export default ProductList;