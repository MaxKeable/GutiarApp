const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET;

const expiration = '2h';

export const Auth = {
    signToken: function (data: Object) {
        try {
            return jwt.sign( data , secret, { expiresIn: expiration });
        } catch (error) {
            console.error(error, ":Error with auth")
        }
    }
}