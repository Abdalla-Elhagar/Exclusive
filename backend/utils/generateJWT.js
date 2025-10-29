import jwt from "jsonwebtoken";


export const generateJWT = (user) => { 

    const payload = {
        name: user.name,
        phone: user.phone,
        password: user.password,
    }

    return jwt.sign(payload, process.env.JWT_SECRET)
}