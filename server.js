import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'


import productRoutes from './routes/productRoutes.js'

const app = express();

dotenv.config();

app.use('/api/products', productRoutes);
console.log("process is", process.env.DB_USER)

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.listen(4000, () => console.log('Server is listening for requests.'));