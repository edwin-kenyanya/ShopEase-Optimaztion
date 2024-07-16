const pool = require('../db');

const getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const result = await pool.query(
            'INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *',
            [name, price, stock]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;
        const result = await pool.query(
            'UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *',
            [name, price, stock, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
