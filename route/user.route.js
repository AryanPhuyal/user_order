const router = require("express").Router();
const Order = require("../model/order");
const user = require("../model/user");
const User = require("../model/user");
const userController = require("../controller/userController");

router.post("/login", userController.login);

router.get("/forgot-password", async (req, res) => {});
router.post("/signup", userController.signup);

router.patch("/disable-user", async (req, res) => {});

router.get("/set-user", async (req, res) => {
  const user = await User.insertMany([
    { userId: 1, name: "Rahul" },
    { userId: 2, name: "Ramesh" },
    { userId: 3, name: "Ankita" },
  ]);
  res.json(user);
});

router.get("/set-order", async (req, res) => {
  const order = await Order.insertMany([
    { orderId: 1, userId: 1, subtotal: 500, date: "23 January 2019" },
    { orderId: 2, userId: 2, subtotal: 400, date: "16 March 2019" },
    { orderId: 3, userId: 1, subtotal: 150, date: "20 March 2019" },
    { orderId: 4, userId: 1, subtotal: 700, date: "25 March 2019" },
    { orderId: 5, userId: 3, subtotal: 200, date: "21 Feb 2019" },
    { orderId: 6, userId: 3, subtotal: 1500, date: "22 Feb 2019" },
    { orderId: 7, userId: 1, subtotal: 1200, date: "16 April 2019" },
    { orderId: 8, userId: 2, subtotal: 1600, date: "1 May 2019" },
    { orderId: 9, userId: 2, subtotal: 900, date: "23 May 2019" },
    { orderId: 10, userId: 1, subtotal: 700, date: "13 april 2019" },
  ]);
  res.json(order).select(" orderId user test");
});

router.get("/user", async function (req, res) {
  const user = await Order.aggregate([
    {
      $group: {
        _id: "$userId",
        noOfOrders: { $sum: 1 },
        userId: { $first: "$userId" },
        average: { $avg: "$subtotal" },
      },
    },
  ]).exec();
  let newUser = await Order.populate(user, { path: "user" });
  newUser = newUser.map((x) => {
    return {
      userId: x.userId,
      name: x.user[0].name,
      noOfOrders: x.noOfOrders,
      averageBillValue: x.average,
    };
  });

  res.json(newUser);
});

router.get("/order", async (req, res) => {
  const users = await Order.aggregate([
    {
      $group: {
        _id: "$userId",
        noOfOrders: { $sum: 1 },
        userId: { $first: "$userId" },
        average: { $avg: "$subtotal" },
      },
    },
  ]).exec();

  await users.forEach(async (u) => {
    await User.findOneAndUpdate({ userId: u._id }, { orders: u.noOfOrders });
  });
  res.json({ success: true });
});

module.exports = router;
