import jwt from "jsonwebtoken"

import User from "../db/Schema/User.js"


export const signin = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            });
          }
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' });
          res.status(200).json({
            userId: user._id,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}

export const signup = async (req, res) => {
try {
		res.status(200).json({
		message: "register route"
	})
} catch (error) {
	console.log(error)
	res.status(400).json({
		message: "Error Signup",
		error: error.message
	})
}
}

export const updateUser =  async( req, res) =>{
try {
		res.status(200).json({
		message: "register route"
	})
} catch (error) {
	console.log(error)
	res.status(400).json({
		message: "Error UpdateUser",
		error: error.message
	})
}
}


export const getUser = async (req, res) =>{
try {
		res.status(200).json({
		message: "get user route"
	})
} catch (error) {
	console.log(error)
	res.status(400).json({
		message: "Error getUser",
		error: error.message
	})
}

}

