const {Schema,model}= require('mongoose');
//product Schema
const productSchema= new Schema({
    productid: {type:String,unique:true,required:true},
    productname: {type:String,required:true},
    productprice: {type:Number,required:true},
    productimage: {type:Array,default:[]},
    productdescription: {type:String},
    style:{type:Array, default:[]},
    productcategory: {type:String},
    productsubcategory: {type:String},
    productquantity: {type:String},
    productrating: {type:String},
    productreview: {type:String},
    productaddedon: {type:Date,default:Date.now}
});

const productModel = model('Product',productSchema);

module.exports = productModel;