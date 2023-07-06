import {Schema,model} from'mongoose';

const tareaSchema = new Schema({
    descripcionTarea:{
        type:String,
        minLength:2,
        maxLength:100,
        required:true,
    }
});
const Tarea = model('tarea', tareaSchema)
export default Tarea