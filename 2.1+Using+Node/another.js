console.log("hello this is another file from js run with node.")

function Clean(name, age) {
    this.name = name;
    this.age = age;
    this.clean = function () {
        console.log("cleaning is in progress.")
    }
}

var cleaner = new Clean("aman", 23);
cleaner.clean();
