import express from 'express';
import controller from '../controllers/test';

const router = express.Router();

router.get('/', controller.serverHealthCheck);

export = router;