const pool = require('../db');

const getSaleProperties = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties_for_sale');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching sale properties:', error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getSaleProperties };
