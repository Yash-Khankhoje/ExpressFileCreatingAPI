let express = require('express');
const app = express();
let fs = require('fs');



// // Writting into a file.
// fs.writeFile(fileName, fileContent,function(err){
//     if(err)throw err;
//     console.log('File created.');
// });


app.post("/create-file", (req, res) => {

    let day = new Date();
let today = day.getDate();
if(today < 10){
    today = '0' + today;
}

let month = day.getMonth();
if(month < 10){
    month = '0' + month;
}
let year = day.getFullYear();

let minutes = day.getMinutes();
let hour = day.getHours();

let fileName = hour + ':' + minutes + '   ' + today + '-' + month + '-' + year
let fileContent = hour + ':' + minutes + '   ' + today + '-' + month + '-' + year;

    fs.writeFile(fileName, fileContent,function(err){
        if(err)throw err;
        console.log('File created.');
    });
    
    res.status(200).json({
        message: 'File created.'
    })
})

let port = 3000;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})