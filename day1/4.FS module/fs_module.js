const fs = require("fs");

//core module of javaScript,Used to work with files & folders and pefrom CRUD...
//can be done synchronus or asynchronus way.If wanting synchronus:append Sync to method name,In this case,no callback but can be handled via promises or async await



//write method: overwrite the file,if not exist,it will create first ,, fs.writeFile(filepath,data,options,callback)

// fs.writeFile("example.txt", "This is my first message for you", (err) => {
//   if (err) console.log(err);
// });




//read method: returns complete content of file,, fs.readFile(filepath,options)
//  fs.promises.readFile("example.txt", "utf-8")
// .then((data)=> {console.log(data)})
// .catch((err)=>{console.log(err)})



//append method: append data to end of file,,  fs.apped(filepath,data,options)
// fs.appendFile("example.txt", "This is my first message for you", (err) => {
//   if (err) console.log(err);
// });



//unlink/delete: delete the file from directory,, fs.unlike(filapath)
// fs.unlink("example.txt",(err)=>{console.log(err)})




//rename:  rename the file ,,  fs.rename(oldpath,newpath)
//  fs.renameSync("example.txt","Hello.txt")



//folders : can make,delete them

//open/close: low level opening of file.It doesnot open file in ID but open in terminal means you can manipulate it there,,   fs.open(filepath,modes,callback) & fs.close(filepath,callback)   ---- modes can be read(r),read and write(r+),write only(w) and apend(a)
//  fs.open("Hello.txt","r+",
//     (err,fd)=>{
//         if(err){console.log(err);}
//     console.log(fd)
//     }
//  )



//file permission:  can change file permissions ,, fs.chmod(filepath,_permCodes_,callback)
