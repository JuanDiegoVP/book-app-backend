const Order = require("./order.model");
const createAOder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order: ", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

const getOrdersByEmail = async (req, res) => {
  try {
    const orders = await Order.find({ email: req.params.email }).sort({
      createdAt: -1,
    });
    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders: ", error);
    res.status(500).json({ message: "Failed to get orders" });
  }
};

module.exports = {
  createAOder,
  getOrdersByEmail,
};
