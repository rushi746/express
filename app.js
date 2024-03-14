const express = require('express');
const adminRoutes = require('./adminRoutes'); // Corrected typo here
const shopRoutes = require('./shopRoutes'); // Corrected typo here

const app = express();

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);

app.use((req, res) => {
    res.status(404).send('Eror Page Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
