const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'products.htm'));
});

// Handle form submission (optional)
app.post('/submit-product', (req, res) => {
  const { productName } = req.body;
  res.send(`Product "${productName}" has been added successfully!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
