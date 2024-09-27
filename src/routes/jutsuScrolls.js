import express from 'express';
import { getJutsScroll, insertJutsuScroll, deleteJutsuScroll, updateJutsuScroll } from '../controllers/jutsuScrolls.js';

const routerJutsu = express.Router();

routerJutsu.get('/', async function(req, res) {
    try {
        const data = await getJutsScroll();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching JutsuScrolls:', error);
        res.status(500).send({ message: 'Erreur serveur', error: error.message });
    }
});

routerJutsu.post('/create', async function(req, res) {
    try {
        const result = await insertJutsuScroll(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during document creation:', error);
        res.status(500).send({ message: 'Error creating document', error: error.message });
    }
});

routerJutsu.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteJutsuScroll(req.params.id);
        res.send({ message: 'Document deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during document deletion:', error);
        res.status(500).send({ message: 'Error deleting document', error: error.message });
    }
});

routerJutsu.put('/update/:id', async function(req, res) {
    try {
        const result = await updateJutsuScroll(req.params.id, req.body);
        res.send({ message: 'Document updated successfully', updatedCount: result });
    } catch (error) {
        console.log('Error during document update:', error);
        res.status(500).send({ message: 'Error updating document', error: error.message });
    }
});

export default routerJutsu;
