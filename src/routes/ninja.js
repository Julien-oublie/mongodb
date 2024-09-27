import express from 'express';
import { getNinja, insertNinja, deleteNinja, updateNinja } from '../controllers/ninja.js';

const routerNinja = express.Router();

routerNinja.get('/', async function(req, res) {
    try {
        const data = await getNinja();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching Ninjas:', error);
        res.status(500).send('Erreur serveur');
    }
});

routerNinja.post('/create', async function(req, res) {
    try {
        const result = await insertNinja(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during Ninja creation:', error);
        res.status(500).send({ message: 'Error creating Ninja', error: error.message });
    }
});

routerNinja.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteNinja(req.params.id);
        res.send({ message: 'Ninja deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during Ninja deletion:', error);
        res.status(500).send({ message: 'Error deleting Ninja', error: error.message });
    }
});

routerNinja.put('/update/:id', async function(req, res) {
    try {
        const result = await updateNinja(req.params.id, req.body);
        res.send({ message: 'Ninja updated successfully', updatedCount: result });
    } catch (error) {
        console.log('Error during Ninja update:', error);
        res.status(500).send({ message: 'Error updating Ninja', error: error.message });
    }
});

export default routerNinja;