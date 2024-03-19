import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
        min:100,
        max:10000
    },
    imagen:{
        type:String,
        required:true,
        validate:{
            validator: function(valor){
                //validar el valor con un patron
                return /^(http|https):\/\/\S+\.(jpeg|jpg|gif|png|bmp)$/i.test(valor)
            },
            message: props => `${props.value} no es una url de imagen valida.`
        }
    },
    categoria:{
        type:String,
        required:true,
        enum:['Bebidas Calientes','Bebidas Frias','Pastelería y Dulces','Desayunos y Snacks']
    },
    descripcionBreve:{
        type:String,
        required:true,
        minLength: 10,
        maxLength: 70,
    },
    descripcionAmplia:{
        type:String,
        required:true,
        minLength: 15,
        maxLength: 800,
    }
})

//vamos a generar el modelo Producto
const Producto = mongoose.model('producto', productoSchema)

export default Producto;