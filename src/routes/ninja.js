import express from 'express';
import { getNinja, insertNinja, deleteNinja, updateNinja } from '../controllers/ninja.js';

const routerNinja = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Ninja:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - rank
 *       properties:
 *         id:
 *           type: string
 *           description: L'identifiant unique du ninja
 *         name:
 *           type: string
 *           description: Le nom du ninja
 *         rank:
 *           type: string
 *           description: Le grade du ninja (Genin, Chuunin, Jonin, etc.)
 *       example:
 *         id: '1'
 *         name: Naruto Uzumaki
 *         rank: Hokage
 */
/**
 * @swagger
 * /ninja:
 *   get:
 *     summary: Récupérer la liste des ninjas
 *     responses:
 *       200:
 *         description: La liste de tous les ninjas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ninja'
 */
routerNinja.get('/', async function(req, res) {
    try {
        const data = await getNinja();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching Ninjas:', error);
        res.status(500).send('Erreur serveur');
    }
});

/**
 * @swagger
 * /ninja/create:
 *   post:
 *     summary: Créer un nouveau ninja
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ninja'
 *     responses:
 *       200:
 *         description: Ninja créé avec succès
 *       500:
 *         description: Erreur lors de la création du ninja
 */
routerNinja.post('/create', async function(req, res) {
    try {
        const result = await insertNinja(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during Ninja creation:', error);
        res.status(500).send({ message: 'Error creating Ninja', error: error.message });
    }
});

/**
 * @swagger
 * /ninja/delete/{id}:
 *   delete:
 *     summary: Supprimer un ninja par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du ninja à supprimer
 *     responses:
 *       200:
 *         description: Ninja supprimé avec succès
 *       500:
 *         description: Erreur lors de la suppression du ninja
 */
routerNinja.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteNinja(req.params.id);
        res.send({ message: 'Ninja deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during Ninja deletion:', error);
        res.status(500).send({ message: 'Error deleting Ninja', error: error.message });
    }
});

/**
 * @swagger
 * /ninja/update/{id}:
 *   put:
 *     summary: Mettre à jour un ninja par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID du ninja à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ninja'
 *     responses:
 *       200:
 *         description: Ninja mis à jour avec succès
 *       500:
 *         description: Erreur lors de la mise à jour du ninja
 */
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