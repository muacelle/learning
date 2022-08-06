const { request, response } = require('express')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))    // a built-in part of express (middleware)

// a route is just us telling what should happen for a specific type of request.

app.get('/', (req, res) => {         // app = our instance of the express package
    res.send('Welcome!')             // get = a type of request
})                                   // (req, res) = parameters of the function we'll run in response to that request

// another route!

app.get('/about', (req, res) => {                       // '/about' = wich part of url we are listening
    res.send(`                                          
        <h1>What color is the sky on a clear day?</h1>
        <form action="/result" method="POST">
            <input type="text" name="color">
            <button>Submit</button>
        </form>
    `)                                                  // o input 'color' será enviado (post) à rota /result
})

app.post('/result', (req, res) => {                     // we can do all sort of things with the parameters!
    let input = req.body.color.trim().toUpperCase();
    if (input === 'BLUE') {
        res.send('Congrats! That is correct.')          // resultados diferentes para inputs diferentes
    } else {
        res.send('Sorry, that is incorrect.')
    }
})

app.listen(3000);  //a porta usada pelo servidor