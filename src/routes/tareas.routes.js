import {Router} from'express';
import { obtenerTareas, crearTarea ,obtenerTarea,borrarTarea} from '../controllers/tareas.controllers';

const router= Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router.route("/tareas/:id").get(obtenerTarea).delete(borrarTarea);
export default router;obtenerTarea