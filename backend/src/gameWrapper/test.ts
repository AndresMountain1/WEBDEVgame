import AIWrapper from "./AIWrapper";
import ServerWrapper from "./ServerWrapper";

let serverWrapper = new ServerWrapper();
serverWrapper.launchServer((data: string) => {
    console.log(" in test");
    console.log(data);
});

let ai1 = new AIWrapper("simplePlayer.py");
let ai2 = new AIWrapper("simplePlayer.py");