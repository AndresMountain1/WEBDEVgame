import net from "net";

class ClientWrapper{
    client: net.Socket;

    constructor(){

        this.client = new net.Socket();

        this.client.connect(14001, '127.0.0.1', () => {
            console.log('Connected');
        });
        
        this.client.on('data', (data) => {
            this.receiveData(data.toString());
        });
        
        this.client.on('close', function() {
            console.log('Connection closed');
        });

    }

    private send(data: string){
        this.client.write(data);
    }

    public sendMove(fromNode: number, toNode: number, strength: number){
        this.send(`move ${fromNode} ${toNode} ${strength}`);
    }

    public sendGrow(node: number){
        this.send(`grow ${node}`);
    }

    public sendSleep(){
        this.send(`sleep`);
    }

    public receiveData(data: string){
        console.log(data);
    }
}

export default ClientWrapper;