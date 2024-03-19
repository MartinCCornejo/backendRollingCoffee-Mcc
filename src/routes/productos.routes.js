import { Router } from "express";
import { listarProductos, crearProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/productos/:id')

export default router;