const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "ShopEase API",
            description: "ShopEase API Information",
            contact: {
                name: "Developer"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
