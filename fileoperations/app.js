var file = require('fs');
file.writeFileSync("./demo.txt","manu123")
file.appendFileSync("./demo.txt","qwerty123")
//after executing this app.js manu is updated in demo.txt file which is empty previously 
//if we dont have a file already created the above command will create a new file and will write in it

//appendfilesync is to append the data along with preseving previous one

var datafromfile= file.readFileSync("./demo.txt")
console.log(datafromfile.toString());
//this command reads txt in demo.txt file and prints o/p in commandprompt


    