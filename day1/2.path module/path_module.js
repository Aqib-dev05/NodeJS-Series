//we have to import path module (core builtin module)
const path = require("path");

//returns complete folder path to which file is present for current file opened (JS)
console.log(__dirname); 
//returns complete path (folder+file.extension) for current file opened (JS)
console.log(__filename); 

const filePath = path.join("folder", "collage", "student", "class", "data.txt");


//returns complete joined path with \ for windows and / for MAC,Linux. Atomatically adds
console.log("join", filePath);

//Returns the file name from a given path.
console.log("basename:", path.basename(filePath));

//Returns the directory (folder) name of the path.
console.log("dirname:", path.dirname(filePath));

//Returns the file extension.
console.log("extname:", path.extname(filePath));

//Resolves paths into an absolute path. Starts from current working directory.
console.log("resolve:", path.resolve("file.txt"));

//Returns an object with details:root(C:\ or /),dir(directory path),base(fileName+extension),ext(file extension),name(file name without extension)
console.log("parse:", path.parse(filePath));

//Opposite of parse().Converts an object { dir, base } back to a path.
console.log(
  "format:",
  path.format({ dir: "/users/aqib/docs", base: "file.txt" })
);

//Returns true if path is absolute, else false.
console.log("isAbsolute:", path.isAbsolute(filePath));

//Returns the relative path from one location to another.
console.log(
  "relative:",
  path.relative("/users/aqib/docs", "/users/aqib/images")
);

console.log("normalize:", path.normalize("/users//aqib/../docs/file.txt"));

//returns path separater: / or \ in double as single treated as escape sequence
console.log("sep:", path.sep);

//Returns the delimiter used in environment variables:-  Windows → ;  Linux/Mac → :
console.log("delimiter:", path.delimiter);
