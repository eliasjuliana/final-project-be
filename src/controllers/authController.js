import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserDB from '../models/userSchema.js';

const { JWT_SECRET_KEY } = process.env;

export const postLogin = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  try {
    const userInDB = await UserDB.findOne({ email, isActive: true });
    console.log(password, userInDB.password);

    // El usuario existe? la contraseña es la misma?
    if (!userInDB || !bcrypt.compareSync(password, userInDB.password)) {
      res.status(400).json({
        data: null,
        message: 'Email or password incorrect',
      });
      return;
    }

    // Todo OK, continuar con la creación del token

    const userInfo = {
      user: {
        id: userInDB._doc._id,
        firstname: userInDB._doc.firstname,
        lastname: userInDB._doc.lastname,
        email: userInDB._doc.email,
        isAdmin: userInDB._doc.isAdmin,
      },
    };

    // (payload, secretKey, options)
    const token = jwt.sign(userInfo, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res.json({
      data: token,
      message: 'Usuario logueado exitosamente',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      data: null,
      message: 'Ocurrió un error en el inicio de sesión',
    });
  }
};
