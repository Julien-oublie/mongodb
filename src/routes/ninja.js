import express from 'express';
import { getNinja, insertNinja, deleteNinja, updateNinja } from '../controllers/ninja.js'

const routerNinja = express.Router()

routerNinja.get('/', async function(req, res) {
    try {
        const data = await getNinja()  
        res.send(data);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});


routerNinja.post('/create', async function(req, res){
    try {
        const result = await insertNinja(req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


routerNinja.delete('/delete/:id', async function(req, res){
    try {
        const result = await deleteNinja(req.params.id)
        res.send(result)

    }catch{
        console.log('ici')
    }
})



routerNinja.put('/update/:id', async function(req, res){
    try {
        const result = await updateNinja(req.params.id, req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


export default routerNinja