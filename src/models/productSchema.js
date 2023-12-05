import mongoose from 'mongoose';

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  isAvailable: Boolean,
  isActive: Boolean,
});

export default mongoose.model('Products', Product);
