import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

mongoose.set('strictQuery', true);

mongoose.set('strictQuery', true);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Database connected');
  })
  .catch((e) => {
    console.error(e);
  });
