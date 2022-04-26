import { ChildProcess, spawn } from "node:child_process";
import fs from "fs";
class AIWrapper{
    // Path to the folder containing the ai files (static)
    aiFolderPath = "/home/artikex-reborn/Cours/Projet-PWEB/WEBDEVgame/backend/hackagames/game-risky/";

    // Path to the ai file
    aiFileName: string;

    bot: ChildProcess;

    constructor(aiFileName: string){
        this.aiFileName = aiFileName;
        
        if(!fs.existsSync(this.aiFolderPath)){
            fs.mkdirSync(this.aiFolderPath);
        }

        let botPath = this.aiFolderPath + aiFileName;

        if(!fs.existsSync(botPath)){
            throw new Error(`The ai file ${botPath} does not exist`);
        }

        let command = "python3";
        this.bot = spawn(command, [botPath]);
        /*
        if(this.bot.stdout){
            this.bot.stdout.on('data', (data) => {
                console.log(data.toString());

            });
        }

        if(this.bot.stderr){
            this.bot.stderr.on('data', (data) => {
                console.log(data.toString());
            });
        }
        */
        this.bot.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
        });

        this.bot.on('error', (err: any) => {
            console.log(err);
        });

        this.bot.on('exit', (code: any) => {
            console.log(`child bot process exited with code ${code}`);
        }
        );
        this.bot.on('spawn', () => {
            console.log(`child bot process spawned`);
        });

    }
}

export default AIWrapper;