
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        
        required: true,
       
    },
    description: {
        type:String,
        required:true,

    }, 
    price:{
        type: Number,
        required:true,
       

    },
   
     
    photo: {
        data: Buffer,
        contentType : String
    },
   
    stock:{
        type: Number,
        required:true,
        min : 0,
        max : 10

    },
    sold:{
        type: Number,
        default :0

    },
    category :{
        type: String, // Change the type to String to store the category name
        ref: 'Category',
        required : true

    },

   

    
    discountType:{
        type:String
    },
    discountPercentage:{
        type:String
    },
    status : {
        type: String,
        required : true
    }
    
    
   
    
        

},
{ timestamps: true }
)
const Product = mongoose.model("Product", productSchema)
export default Product