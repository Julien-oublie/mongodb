import express from 'express';
import { getJutsScroll, insertJutsuScroll, deleteJutsuScroll, updateJutsuScroll } from '../controllers/jutsuScrolls.js'

const routerJutsu = express.Router()

routerJutsu.get('/', async function(req, res) {
    try {
        const data = await getJutsScroll()  
        res.send(data);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});


routerJutsu.post('/create', async function(req, res){
    try {
        const result = await insertJutsuScroll(req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


routerJutsu.delete('/delete/:id', async function(req, res){
    try {
        const result = await deleteJutsuScroll(req.params.id)
        res.send(result)

    }catch{
        console.log('ici')
    }
})



routerJutsu.put('/update/:id', async function(req, res){
    try {
        const result = await updateJutsuScroll(req.params.id, req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


export default routerJutsu