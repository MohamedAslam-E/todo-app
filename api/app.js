import swaggerUi from 'swagger-ui-express'
import express from 'express'
import router from "./routes/api.js"
import swaggerSpec from './config/swagger-config.js';
import cors from 'cors'
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 2001

mongoose.connect('mongodb://localhost:27017/todo', {});

mongoose.connection.on('error',(error)=>{
  console.error('MongoDB Connection error:',error)
});

mongoose.connection.once('open',async()=>{
  console.log('connected to mongodb');
})

mongoose.connection.on('disconnected',()=>{
  console.log('Disconnected from mongodb');
})
const swaggerOptions = {
    customSiteTitle: 'TO DO',
    customCss: '.topbar { display: none }',
}

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api',router)
app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec,swaggerOptions))
app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
      standardHeaders: 'draft-7', // Set `RateLimit` and `RateLimit-Policy` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
      message: {
        error: 'Too many requests from this IP, please try again after 15 minutes',
        data: null,
      },
    }),
  );

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
