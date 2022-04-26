

const { default: mongoose } = require("mongoose");
let User = require("./userdb");


(async function () {
    const silence = new User({ _id: new mongoose.Types.ObjectId(),name: 'Silence', password: 123 });
    console.log(silence.password); 
    
    let data = await silence.save();
    console.log(data);
  })