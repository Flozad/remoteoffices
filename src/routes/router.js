import { Router } from "express";
import { placesController } from "../controllers/placesController";

const router = Router();

router.get('/', placesController.getPlaces)

router.post('/', placesController.addPlace)

router.put('/:id',  placesController.updatePlace)

router.delete('/', placesController.deletePlace)

export default router