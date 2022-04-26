import { ChildProcess, spawn } from "node:child_process";

class ServerWrapper{
    SERVER_PATH = "/home/artikex-reborn/Cours/Projet-PWEB/hackagames/game-risky/hg-risky";
    
    server: ChildProcess;

    constructor(){
        this.server = spawn(this.SERVER_PATH, {stdio: ['ignore', 'pipe', 'pipe']});
        if(this.server.stdout){
            this.server.stdout.on('data', (data) => {
                console.log(data.toString());

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
            console.log(`child process exited with code ${code}`);
        }
        );
        this.server.on('spawn', () => {
            console.log(`child process spawned`);
        });

    }
}

export default ServerWrapper;