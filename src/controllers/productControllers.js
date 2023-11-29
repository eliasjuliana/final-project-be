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
