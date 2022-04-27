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

    let ai1File = req.body.ai1File ? req.body.ai1File : 'simplePlayer.py';
    let ai2File = req.body.ai2File ? req.body.ai2File : 'simplePlayer.py';

    let serverWrapper = new ServerWrapper(gameNumber);
    
    serverWrapper.launchServer((data: string) => {

        const searchRegExp = /\n/g;
        const replaceWith = ' ';
        const sanitized = data.replace(searchRegExp, replaceWith);

        let playersRegex = [/([0-9]{1}) \(socket: ([0-9]{1}).+\) /g, /.+New player-([1-9]{1}) \(socket: ([0-9]{1}).+\) /g]
        let players = [];

        // Get the player ids and sockets from the data
        for (let index = 0; index < 2; index++) {
            const regex = playersRegex[index];
            const match = regex.exec(sanitized);
            if(!match) throw new Error("No player could be extracted from data");
    
            let player = { id: parseInt(match[1]), socket: parseInt(match[2]), score: 0 };
            players.push(player);
        }

        // Get the game result from the data
        const scoreRegex = /.+\: score: ([0-9]{1})\(([0-9]{1,3}).+, ([0-9]{1})\(([0-9]{1,3})/g;
        const scoreMatch = scoreRegex.exec(sanitized);
        if(!scoreMatch) throw new Error("No score found in data");
        
        players.forEach(player => {
            if(player.socket === parseInt(scoreMatch[1])) {
                player.score = parseInt(scoreMatch[2]);
            }
            if(player.socket === parseInt(scoreMatch[3])) {
                player.score = parseInt(scoreMatch[4]);
            }
        });    

        return res.status(200).json({players});
    });

    let ai1 = new AIWrapper(ai1File);
    let ai2 = new AIWrapper(ai2File);
 };

export default { serverHealthCheck, playAiVsAi };