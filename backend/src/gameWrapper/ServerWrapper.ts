import { ChildProcess, spawn } from "node:child_process";

class ServerWrapper{
    // Path to the server executable
    SERVER_PATH = "/home/artikex-reborn/Cours/Projet-PWEB/hackagames/game-risky/hg-risky-hidden";
    
    server: ChildProcess | undefined;

    gameNumber: number;

    result: string;
    constructor(gameNumber: number = 1){
        this.gameNumber = gameNumber;
        this.result = "";
    }

    launchServer(callback: any){
        this.server = spawn(this.SERVER_PATH, [`${this.gameNumber}`], {stdio: ['ignore', 'pipe', 'pipe']});
        if(this.server.stdout){
            this.server.stdout.on('data', (data) => {
                callback(data.toString());

            });
        }

        if(this.server.stderr){
            this.server.stderr.on('data', (data) => {
                console.log(data.toString());
            });
        }
        this.server.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
        });

        this.server.on('error', (err: any) => {
            console.error(`error: ${err}`);
        });

        this.server.on('exit', (code: any) => {
            return true;
        }
        );
        this.server.on('spawn', () => {
            console.log(`child server process spawned`);
        });
    }
    
}

export default ServerWrapper;