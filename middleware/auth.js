const User = require("../modal/User");
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
      //   split at the space
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, process.env.JWT_SECRET, async (err, authData) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ error: "forbidden" });
        }
        const user = await User.findById(authData.id);
        req.user = user;
        next();
      });
    } else {
      console.log(bearerHeader);

      res.status(403).json({
        error: "Invalid request",
      });
    }
  } catch (err) {
    res.status(500).json({ success: "Something went wrong" });
  }
};
module.exports = isAuth;
