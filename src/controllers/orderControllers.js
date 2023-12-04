import OrderModel from '../models/orderSchema.js';

export const getOrders = async (_, res) => {
  try {
    const data = await OrderModel.find({});

    const filteredData = data.filter(
      (order) => order._doc.isActive === true,
    );

    res.json({ data: filteredData, message: 'Orders found' });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      data: null,
      message: 'An error occurred while connecting to the database',
    });
  }
};

export const postOrder = async (req, res) => {
  const { body } = req;

  const newOrder = new OrderModel({
    productsOrdered: body.productsOrdered,
    tablenumber: body.tablenumber,
    userId: body.userId,
    isActive: true,
  });

  try {
    await newOrder.save();

    res.status(201).json({
      data: null,
      message: 'Order added succesfully',
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      data: null,
      message: 'An error occurred while posting the order',
    });
  }
};
