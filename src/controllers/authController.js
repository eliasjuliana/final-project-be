import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserDB from '../models/userSchema.js';

const { JWT_SECRET_KEY } = process.env;

export const postLogin = async (req, res) => {
  const {
    body: { username, password },
  } = req;

  try {
    const userInDB = await UserDB.findOne({ username, isActive: true });

    if (!userInDB || !bcrypt.compareSync(password, userInDB.password)) {
      res.status(400).json({
        data: null,
        message: 'Incorrect user or password',
      });
      return;
    }

    const userInfo = {
      user: {
        id: userInDB._doc._id,
        firstname: userInDB._doc.firstname,
        lastname: userInDB._doc.lastname,
        username: userInDB._doc.email,
        isAdmin: userInDB._doc.isAdmin,
      },
    };

    const token = jwt.sign(userInfo, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res.json({
      data: token,
      message: 'User successfully logged in',
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: 'An error occurred during login',
    });
  }
};
