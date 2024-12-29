const express = require("express");
const { createAOder, getOrdersByEmail } = require("./order.controller");

const router = express.Router();

// Create order endpoint
router.post("/", createAOder);

// get orders by user email
router.get("/email/:email", getOrdersByEmail);

module.exports = router;
