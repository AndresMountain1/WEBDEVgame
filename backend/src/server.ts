import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

// ROUTES 
import gameRoute from './routes/game';

const router = express();
dotenv.config();

/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    console.info(`REQ: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        console.info(`RES: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

/** Parse the body of the request */
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Create a helloworld route that returns a string
router.get('/', (req, res) => {
    res.send('Hello World!');
});

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

router.use('/game', gameRoute);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(process.env.PORT, () => console.info(`Server is running on localhost:${process.env.PORT}`));