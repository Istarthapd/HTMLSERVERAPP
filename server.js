const express = require('express');
const path = require('path');
const app = express();
const PORT = 6000;

// Serve the HTML file on GET /api/products
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'products.htm'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
