import express from 'express';
import { getEmprunt, insertEmprunt, deleteEmprunt, updateEmprunt } from '../controllers/emprunt.js';

const routerEmprunt = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Emprunt:
 *       type: object
 *       required:
 *         - id
 *         - nom
 *         - montant
 *         - date
 *       properties:
 *         id:
 *           type: string
 *           description: L'identifiant unique de l'emprunt
 *         nom:
 *           type: string
 *           description: Le nom de l'emprunteur
 *         montant:
 *           type: number
 *           description: Le montant de l'emprunt
 *         date:
 *           type: string
 *           format: date
 *           description: La date de l'emprunt
 *       example:
 *         id: 1
 *         nom: Julien Oublié
 *         montant: 5000
 *         date: 2024-09-27
 */
/**
 * @swagger
 * /emprunt:
 *   get:
 *     summary: Récupérer la liste des emprunts
 *     responses:
 *       200:
 *         description: La liste de tous les emprunts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emprunt'
 */
routerEmprunt.get('/', async function(req, res) {
    try {
        const data = await getEmprunt();
        res.send(data);
    } catch (error) {
        console.log('Error during fetching Emprunts:', error);
        res.status(500).send('Erreur serveur');
    }
});

/**
 * @swagger
 * /emprunt/create:
 *   post:
 *     summary: Créer un nouvel emprunt
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emprunt'
 *     responses:
 *       200:
 *         description: Emprunt créé avec succès
 *       500:
 *         description: Erreur lors de la création de l'emprunt
 */
routerEmprunt.post('/create', async function(req, res) {
    try {
        const result = await insertEmprunt(req.body);
        res.send(result);
    } catch (error) {
        console.log('Error during Emprunt creation:', error);
        res.status(500).send({ message: 'Error creating Emprunt', error: error.message });
    }
});

/**
 * @swagger
 * /emprunt/delete/{id}:
 *   delete:
 *     summary: Supprimer un emprunt par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'emprunt à supprimer
 *     responses:
 *       200:
 *         description: Emprunt supprimé avec succès
 *       500:
 *         description: Erreur lors de la suppression de l'emprunt
 */
routerEmprunt.delete('/delete/:id', async function(req, res) {
    try {
        const result = await deleteEmprunt(req.params.id);
        res.send({ message: 'Emprunt deleted successfully', deletedCount: result });
    } catch (error) {
        console.log('Error during Emprunt deletion:', error);
        res.status(500).send({ message: 'Error deleting Emprunt', error: error.message });
    }
});

/**
 * @swagger
 * /emprunt/update/{id}:
 *   put:
 *     summary: Mettre à jour un emprunt par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID de l'emprunt à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emprunt'
 *     responses:
 *       200:
 *         description: Emprunt mis à jour avec succès
 *       500:
 *         description: Erreur lors de la mise à jour de l'emprunt
 */
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