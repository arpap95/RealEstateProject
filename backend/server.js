const express = require('express');
const cors = require('cors');
const saleRoutes = require('./routes/saleRoutes');
const rentRoutes = require('./routes/rentRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sale', saleRoutes);
app.use('/api/rent', rentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
