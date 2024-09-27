import express from 'express';
import { getEmprunt, insertEmprunt, deleteEmprunt, updateEmprunt } from '../controllers/emprunt.js'

const routerEmprunt = express.Router()

routerEmprunt.get('/', async function(req, res) {
    try {
        const data = await getEmprunt()  
        res.send(data);
    } catch (err) {
        res.status(500).send('Erreur serveur');
    }
});


routerEmprunt.post('/create', async function(req, res){
    try {
        const result = await insertEmprunt(req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


routerEmprunt.delete('/delete/:id', async function(req, res){
    try {
        const result = await deleteEmprunt(req.params.id)
        res.send(result)

    }catch{
        console.log('ici')
    }
})



routerEmprunt.put('/update/:id', async function(req, res){
    try {
        const result = await updateEmprunt(req.params.id, req.body)
        res.send(result)

    }catch{
        console.log('ici')
    }
})


export default routerEmprunt