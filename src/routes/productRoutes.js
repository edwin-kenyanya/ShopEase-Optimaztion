const express = require('express');
const {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const router = express.Router();

/**
 * @swagger
 * /products:
 *  get:
 *    description: Get all products
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/', getProducts);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    description: Get a product by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/:id', getProductById);

/**
 * @swagger
 * /products:
 *  post:
 *    description: Add a new product
 *    parameters:
 *      - name: product
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            price:
 *              type: number
 *            stock:
 *              type: integer
 *    responses:
 *      201:
 *        description: Created
 */
router.post('/', addProduct);

/**
 * @swagger
 * /products/{id}:
 *  put:
 *    description: Update an existing product
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *      - name: product
 *        in: body
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            price:
 *              type: number
 *            stock:
 *              type: integer
 *    responses:
 *      200:
 *        description: Updated
 */
router.put('/:id', updateProduct);

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    description: Delete a product
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Deleted
 */
router.delete('/:id', deleteProduct);

module.exports = router;
