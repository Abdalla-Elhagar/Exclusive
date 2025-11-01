import jwt from "jsonwebtoken";


export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated: no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      phone: decoded.phone,
    };
    next();
  } catch (err) {
    console.log(err);
  }
};
