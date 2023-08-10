const express = require('express');

const app = express();

app.get('', (req,res)=>{
    console.log(req.query.name)
    res.send('<h1>Hello , this is Home page <h1>')

});


app.get('/about', (req,res)=>{
    res.send(`
    <input type="text" placeholder="Username">
    <button>Click here</button>
    `)
});

app.get('/help', (req,res)=>{
    res.send([
        {
            name:'user',
            email:'dssd@mail.com'
        },
        {
            name:'user',
            email:'dssd@mail.com'
        },
        {
            name:'user',
            email:'dssd@mail.com'
        },
        {
            name:'user',
            email:'dssd@mail.com'
        }]
    )
});


app.listen(3000);