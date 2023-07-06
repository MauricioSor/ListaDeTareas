import {connect} from 'mongoose';
import {MONGODB_URI} from '../config';

connect(MONGODB_URI).then(res => console.log(`DB conectada en el puerto`+res.connection.port))
.catch(error=>console.log(error));