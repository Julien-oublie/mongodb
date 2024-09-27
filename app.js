import express from 'express';

import routerJutsu from './src/routes/jutsuScrolls.js'
import ninja from './src/routes/ninja.js'
import emprunt from './src/routes/emprunt.js'

const app = express();

app.use(express.json())

app.use('/jutsuScrolls', routerJutsu)
app.use('/ninja', ninja)
app.use('/emprunt', emprunt)


app.get('/hello', function (req, res) {  
    res.send({message: 'hello'})
    
})

app.listen(3001, () => {
  console.log('le serveur tourne')
})