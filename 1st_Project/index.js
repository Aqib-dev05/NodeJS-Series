import express from "express";
import mongoose from "mongoose";

 const PORT = 3000;

  const app =express();

  app.listen(PORT,()=>{
    console.log("Listening at the port",PORT)
  })