import { NextFunction, Request, Response } from 'express';
import AIWrapper from '../gameWrapper/AIWrapper';
import ServerWrapper from '../gameWrapper/ServerWrapper';

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'pong'
    });
};

const playAiVsAi = (req: Request, res: Response, next: NextFunction) => {
    let gameNumber = req.body.gameNumber ? req.body.gameNumber : 1;

    let ai1File = req.body.ai1File;
    let ai2File = req.body.ai2File;
};

export default { serverHealthCheck, playAiVsAi };