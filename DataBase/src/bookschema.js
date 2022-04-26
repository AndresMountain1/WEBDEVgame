

let Kitten = require("./userdb");


(async function () {
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);
    
    let data = await silence.save();
    console.log(data);
  })()