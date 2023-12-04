import ProductModel from '../models/productSchema.js';

// GET
export const getProducts = async (_, res) => {
  try {
    const data = await ProductModel.find({});

    const filteredData = data
      .filter((product) => product._doc.isActive === true)
      .map((product) => ({
        id: product._doc._id,
        name: product._doc.name,
        image: product._doc.image,
        price: product._doc.price,
        description: product._doc.description,
        amount: product._doc.amount,
        isAvailable: product._doc.isAvailable,
      }));

    res.json({ data: filteredData, message: 'Products found' });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      data: null,
      message: 'An error occured while connecting to the DB',
    });
  }
};

// POST
export const postProducts = async (req, res) => {
  const { body } = req;

  /* traigo BODY del FrontEnd */

  const newProduct = new ProductModel({
    name: body.name,
    image: body.image,
    price: body.price,
    description: body.description,
    amount: body.amount,
    isAvailable: false,
    isActive: true,
  });

  try {
    await newProduct.save();

    res.status(201).json({
      data: null,
      message: 'Product added succesfully',
    });
  } catch (e) {
    console.log(e);
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

// PUT
export const putProduct = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const action = await ProductModel.updateOne({ _id: id }, body);

    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No product found with that ID',
      });
      return;
    }

    res.json({
      data: null,
      message: 'The product was updated succesfully',
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
      message: 'An error occured updating the product',
    });
  }
};

// DELETE
export const deleteProduct = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const action = await ProductModel.updateOne(
      { _id: id, isActive: true },
      { isActive: false },
    );

    if (action.matchedCount === 0) {
      res.status(400).json({
        data: null,
        message: 'No product found with that ID',
      });
      return;
    }

    res.json({
      data: null,
      message: 'The product was deleted successfully',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'An error occurred updating the product',
    });
  }
};
