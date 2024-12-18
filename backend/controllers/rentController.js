const pool = require('../db');

const getRentProperties = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties_for_rent');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching rent properties:', error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getRentProperties };
