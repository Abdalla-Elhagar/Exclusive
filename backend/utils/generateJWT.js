import jwt from "jsonwebtoken";


export const generateJWT = (user) => { 

    const payload = {
        _id: user._id,
        name: user.name,
        phone: user.phone,
        password: user.password,
    }

    return jwt.sign(payload, process.env.JWT_SECRET)
}