import Tarea from "../models/tarea";

export const obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        console.log(tareas);
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar Tareas',
        });
    };
}
export const obtenerTarea = async (req, res) => {
    try {
        const tareas = await Tarea.findById(req.params.id);
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar Tareas',
        });
    };
}
export const crearTarea = async (req, res) => {
    try {
        const nuevaTarea= new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json({
            mensaje:'se creo exitosamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'error al crear'
        });
    }
    crearTarea;
}