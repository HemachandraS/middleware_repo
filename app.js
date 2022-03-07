const express = require('express');
const app=express();
app.use(logger)
app.get('/books',(req,res)=>{
    return res.send( { route: "/books"});
});

let permission = false; 
app.get('/libraries',checkPermission('librarian'),(req,res)=>{
    return res.send({ route: "/libraries", permission: permission});
});

app.get('/authors',checkPermission('author'),(req,res)=>{
    return res.send({ route: "/authors", permission: permission});
});

function logger (req,res,next){
    console.log("Middleware");
    next();
}

app.listen(4000,()=>{
console.log('listening on part 4000')
});

function checkPermission(job){

    return function checkPermission(req,res,next){
        if(job=='author' && req.path=="/authors")
        {
            permission=true;
        }
        else(job=='librarian' && req.path=="/libraries")
        {
            permission=true;
        }
        next();
    }
}

