import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/',(req,res) => {res.json({message: 'hola'})});
router.get('/mockingpets',mocksController.getRandomPets);
router.get('/mockingusers',mocksController.getRandomUsers);
router.post('/generateData',mocksController.generateData);


export default router;