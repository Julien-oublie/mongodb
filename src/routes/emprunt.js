import express from 'express';
import { getEmprunt, insertEmprunt, deleteEmprunt, updateEmprunt } from '../controllers/emprunt.js';

const routerEmprunt = express.Router();

routerEmprunt.get('/', async function(req, res) {
    try {
        const data = await getEmprunt();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching Emprunts:', error);
        res.status(500).send('Erreur serveur');
    }
});

routerEmprunt.post('/create', async function(req, res) {
    try {
        const result = await insertEmprunt(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during Emprunt creation:', error);
        res.status(500).send({ message: 'Error creating Emprunt', error: error.message });
    }
});

routerEmprunt.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteEmprunt(req.params.id);
        res.send({ message: 'Emprunt deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during Emprunt deletion:', error);
        res.status(500).send({ message: 'Error deleting Emprunt', error: error.message });
    }
});

routerEmprunt.put('/update/:id', async function(req, res) {
    try {
        const result = await updateEmprunt(req.params.id, req.body);
        res.send({ message: 'Emprunt updated successfully', updatedCount: result });
    } catch (error) {
        console.log('Error during Emprunt update:', error);
        res.status(500).send({ message: 'Error updating Emprunt', error: error.message });
    }
});

export default routerEmprunt;