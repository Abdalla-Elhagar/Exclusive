export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated: no token" });
    }

    const { _id, phone, name, password } = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = { _id, phone, name, password };

    next();
  } catch (err) {
    console.log(err);
  }
};
