import ProductModel from '../models/productSchema.js';

export const getProducts = async (_, res) => {
  try {
    const data = await ProductModel.find({});

    res.json(data);
  } catch (e) {
    console.error(e);

    res.status(500).json({
      message: 'An error occured while connecting to the DB',
    });
  }
};

export const postProducts = async (req, res) => {
  const { body } = req;

  /* traigo BODY del FrontEnd */

  const newProduct = new ProductModel({
    name: body.name,
    image: body.image,
    price: body.price,
    description: body.description,
    amount: body.amount,
    isAvailable: true,
    isOrdered: false,
  });

  try {
    await newProduct.save();

    res.status(201).json({
      data: null,
      message: 'Product added succesfully',
    });
  } catch (e) {
    if (e.message.includes('duplicate')) {
      res.status(400).json({
        data: null,
        message: 'The product name is already used',
      });
      return;
    }

    res.status(500).json({
      data: null,
      message: 'An error occured while posting the product',
    });
  }
};
