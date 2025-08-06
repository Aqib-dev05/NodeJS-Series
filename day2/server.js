//http module
/* allows to create our personal HTTP server. Use protocls ike https and http */

const http=require("http");


//this wll create a web serever.Takes a caalback with 2 paras:request&response.
//request contains info about client request and resonse contains server data to be deleiverd

const server = http.createServer((req,res)=>{

    if(req.url ==="/"){
        //additional info about response
        res.setHeader("Content-Type","text/plain")
        //writing content/info 
        res.write("Hello,This is my first server request");
        //sending the request
        res.end();
    }
});

//default port number
const PORT= 3000;


//starts the server and listen it to port
  server.listen(PORT,()=>{
    console.log("Listening at "+PORT);
  })
  //server doesnot render changes,we have to close and start again and again,To prevent this,Use nodemone

//we can also use --watch flag to auto restart app.Same as nodemon