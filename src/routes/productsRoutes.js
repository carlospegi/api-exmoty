import {Router} from 'express';
import productController from '../controllers/productsControllers.js';
const productsRouter = Router()

productsRouter.get("/", productController.getAll)
productsRouter.get("/:id",productController.getOne )
productsRouter.post("/",productController.add )
productsRouter.delete("/:id",productController.delete )
productsRouter.put("/:id",productController.update )


export default  productsRouter;