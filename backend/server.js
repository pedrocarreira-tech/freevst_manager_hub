import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import recommendationRoutes from './routes/recommendationRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('VST Manager API Running'));
app.use('/api/recommendations', recommendationRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>app.listen(process.env.PORT || 5000))
  .catch(err=>console.error(err));
