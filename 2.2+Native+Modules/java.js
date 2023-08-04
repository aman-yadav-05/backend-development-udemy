const fs = require("fs");

fs.writeFile("Main.c++", "#include <iostream> \n using namespace std; \n int main(){cout<<'hello from node'<<endl; return 0}", (err) => {
    if (err) throw err;
    console.log("file created successfully!!")
})

fs.readFile("./Main.c++", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})