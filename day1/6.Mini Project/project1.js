//PROJECT DESCRIPTION
/*
 1.Create a log file automatically if it does'nt exists  (path+fs module)
 2.Log system Info (os module)
 3.Use EventEmitter to trigger logging events (events module)
 4.Append logs with timestamps (fs)
*/

const fs = require('fs');
const os = require('os');
const EventEmitter = require("events");
const path = require("path");

const date =new Date().toLocaleString();
const emitter = new EventEmitter();


// Collected data from os module via emitters
 const dataRaw={
    Type:'',
    Plateform:'',
    HostName:'',
    RAM:'',
    CPU_cores:'',
    UpTime:'',
    Release_Date:''
 }

//path to curent directory
 const filepath= path.join(__dirname,"systemInfo.log");
 

  emitter.on("getSystemInfo",()=>{
      dataRaw.Type = os.type();
      dataRaw.Plateform=os.platform();
      dataRaw.HostName=os.hostname();
      dataRaw.CPU_cores=os.cpus().length;
      dataRaw.UpTime=Math.ceil(os.uptime())+"s";
      dataRaw.RAM= Math.ceil(os.totalmem() /1024 / 1024 /1024)+"GB";
      dataRaw.Release_Date=os.release();
  })

   emitter.emit("getSystemInfo")

   let content="";
   //final string data to be stored in file
   
   for(key in dataRaw){
       content +=`${key} = ${dataRaw[key]}\n `;
    }
    let contentToStore =`\t${date}\n\n${content}\n\n\n `;

   //appending data to file
   fs.appendFile(filepath,contentToStore,
     (err)=>{console.log(err)}
)