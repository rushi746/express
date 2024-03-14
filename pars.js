const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Route to display the form
app.get('/add-product', (req, res) => {
  res.send('<form action="/add-product" method="POST">' +
    '<input type="text" name="productName" placeholder="Product Name">' +
    '<input type="text" name="productSize" placeholder="Product Size">' +
    '<button type="submit">Add Product</button>' +
    '</form>');
});

// Route to handle form submission
app.post('/add-product', (req, res) => {
  const productName = req.body.productName;
  const productSize = req.body.productSize;
  console.log(`Product Name: ${productName}, Size: ${productSize}`);
  res.send('Product added successfully!');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
