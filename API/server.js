const express = require("express");
const fileupload = require('express-fileupload')
const { spawn } = require("child_process");

const app = express();
const port = 3000;

app.get("/convertPdfToXml", (req, res) => {
  const dataToSend;

  const text = req.query.teste;

  const python = spawn("python", ["teste.py", text]);
  
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    // res.send(dataToSend);
    res.send(dataToSend);
  });
});

app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);

app.listen(3333, () => {});

app.use(
  fileupload(),
);
