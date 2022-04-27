import express from 'express';
import controller from '../controllers/game';

const router = express.Router();

router.get('/', controller.serverHealthCheck);
router.post('/aivsai', controller.playAiVsAi);
export = router;