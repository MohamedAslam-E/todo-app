import express from 'express';
import { getTask,createTask, deleteTask, updateTask } from '../controllers/apiController.js';

const router = express.Router();

/**
 * @swagger
 * /items:
 *   post:
 *     summary: create a new todo
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: todo created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError' 
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralError'  
 */
router.post('/items',createTask);

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get a list of task
 *     tags: [Todo]
 *     responses:
 *       200:
 *         description: List of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralError'
 */
router.get('/items',getTask);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: task completed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralError'
 */
router.put('/items/:id',updateTask);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete task
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: task deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GeneralError'
 */
router.delete('/items/:id',deleteTask);

export default router;