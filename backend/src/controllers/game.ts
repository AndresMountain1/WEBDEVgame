import { NextFunction, Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
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

    try {
        let serverWrapper = new ServerWrapper(gameNumber);
    
        serverWrapper.launchServer((data: string) => {
            
            //console.log(data);
            const searchRegExp = /\n/g;
            const replaceWith = ' ';
            const sanitized = data.replace(searchRegExp, replaceWith);
    
            let playersRegex = [/([0-9]{1}) \(socket: ([0-9]{1}).+\) /g, /.+New player-([1-9]{1}) \(socket: ([0-9]{1}).+\) /g]
            let players: any[] = [];
    
            // Get the player ids and sockets from the data
            for (let index = 0; index < 2; index++) {
                const regex = playersRegex[index];
                const match = regex.exec(sanitized);
                if(!match) throw new Error("No player could be extracted from data");
        
                let player = { id: parseInt(match[1]), socket: parseInt(match[2]), score: 0 };
                players.push(player);
            }
    
            const scoreRegex = /score: ([0-9]{1})\(([0-9]{1,3}).+, ([0-9]{1})\(([0-9]{1,3})/g;

            data.split("\n").forEach(line => {
                const scoreMatch = scoreRegex.exec(line);
                players.forEach(player => {
                    if(scoreMatch == null) return;

                    if(player.socket === parseInt(scoreMatch[1])) {
                        player.score += parseInt(scoreMatch[2]);
                    }
                    if(player.socket === parseInt(scoreMatch[3])) {
                        player.score += parseInt(scoreMatch[4]);
                    }
                });    
            });
    
            return res.status(200).json({players});
        });
    } catch (error) {
        return res.status(500).json({error: error});
    }

    try {
        let ai1 = new AIWrapper(ai1File);
        let ai2 = new AIWrapper(ai2File);
    } catch (error) {
        return res.status(500).json({error: error});
    }

 };

 const uploadAi = (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.files) {
            res.status(401).send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let aiFile = req.files.aiFile as UploadedFile;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            aiFile.mv('./aiFiles/' + aiFile.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: aiFile.name,
                    mimetype: aiFile.mimetype,
                    size: aiFile.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
 };

export default { serverHealthCheck, playAiVsAi, uploadAi };