const fs = require("fs");

// fs.writeFile("info.txt", "name:aman yadav \n age:22", (err) => {
//     if (err) throw err;
//     console.log("file successfully created!")
// })

fs.readFile('./info.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
})