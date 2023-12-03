import swaggerJSDoc from "swagger-jsdoc";
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const swaggerDefinition = {
    openapi: '3.0.0',
    info:  {
        version: '1.0.0',
        description: 'API for todo'
    },
    servers: [
        {
            url: `http://localhost:2001/api`,
        },
    ],
};

const options = {
  swaggerDefinition,
  apis: [
    path.resolve(__dirname,'../routes/api.js'),
    path.resolve(__dirname,'./swagger-components.yaml')
  ]
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;