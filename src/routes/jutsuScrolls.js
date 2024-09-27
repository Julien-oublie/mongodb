import express from 'express';
import { getJutsScroll, insertJutsuScroll, deleteJutsuScroll, updateJutsuScroll } from '../controllers/jutsuScrolls.js';

const routerJutsu = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     JutsuScroll:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: L'identifiant unique du rouleau de jutsu
 *         name:
 *           type: string
 *           description: Le nom du jutsu
 *         description:
 *           type: string
 *           description: Une description détaillée du jutsu
 *       example:
 *         id: '1'
 *         name: Rasengan
 *         description: Un puissant jutsu de type chakra en spirale
 */
/**
 * @swagger
 * /jutsuScrolls:
 *   get:
 *     summary: Récupérer la liste des rouleaux de jutsu
 *     responses:
 *       200:
 *         description: La liste de tous les rouleaux de jutsu
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/JutsuScroll'
 */
routerJutsu.get('/', async function(req, res) {
    try {
        const data = await getJutsScroll();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching JutsuScrolls:', error);
        res.status(500).send({ message: 'Erreur serveur', error: error.message });
    }
});

/**
 * @swagger
 * /jutsuScrolls/create:
 *   post:
 *     summary: Créer un nouveau rouleau de jutsu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JutsuScroll'
 *     responses:
 *       200:
 *         description: Rouleau de jutsu créé avec succès
 *       500:
 *         description: Erreur lors de la création du rouleau de jutsu
 */
routerJutsu.post('/create', async function(req, res) {
    try {
        const result = await insertJutsuScroll(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during document creation:', error);
        res.status(500).send({ message: 'Error creating document', error: error.message });
    }
});

/**
 * @swagger
 * /jutsuScrolls/delete/{id}:
 *   delete:
 *     summary: Supprimer un rouleau de jutsu par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du rouleau de jutsu à supprimer
 *     responses:
 *       200:
 *         description: Rouleau de jutsu supprimé avec succès
 *       500:
 *         description: Erreur lors de la suppression du rouleau de jutsu
 */
routerJutsu.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteJutsuScroll(req.params.id);
        res.send({ message: 'Document deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during document deletion:', error);
        res.status(500).send({ message: 'Error deleting document', error: error.message });
    }
});

/**
 * @swagger
 * /jutsuScrolls/update/{id}:
 *   put:
 *     summary: Mettre à jour un rouleau de jutsu par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du rouleau de jutsu à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JutsuScroll'
 *     responses:
 *       200:
 *         description: Rouleau de jutsu mis à jour avec succès
 *       500:
 *         description: Erreur lors de la mise à jour du rouleau de jutsu
 */
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
