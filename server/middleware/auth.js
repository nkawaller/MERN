import jwt, { decode } from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_STRING);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; // Sub is Google's name for a user id
        }
        next();
    } catch (error) {
       console.log(error) 
    }
}

export default auth;