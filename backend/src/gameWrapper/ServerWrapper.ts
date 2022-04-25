import net from "net";

class ServerWrapper{
    client: net.Socket;

    constructor(){

        this.client = new net.Socket();

        this.client.connect(14001, '127.0.0.1', () => {
            console.log('Connected');
        });
        
        this.client.on('data', (data) => {
            console.log(data.toString());
        });
        
        this.client.on('close', function() {
            console.log('Connection closed');
        });

        setTimeout(() => {
            this.sendMove(1, 3, 10);
        }, 5000);

    }

    private send(data: string){
        this.client.write(data);
    }

    public sendMove(fromNode: number, toNode: number, strength: number){
        this.send(`move ${fromNode} ${toNode} ${strength}`);
    }

}

let bap = new ServerWrapper();

export default ServerWrapper;