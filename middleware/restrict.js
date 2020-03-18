const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model")

function restrict() {
	const authError = {
		message: "Invalid credentials",
	}
	
	return async (req, res, next) => {
		try {

			const { token } = req.cookies
			if (!token){
				return res.status(401).json(authError)
			} 
			// verifying the token's signature
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
				if(err){
					return res.status(401).json(authError)
				}

				req.token = decoded
				console.log(decoded)

				
			})
			
			next()
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict

// 				const { username, password } = req.headers
			// if (!username || !password) {
			// 	return res.status(401).json(authError)
			// }

			// const user = await Users.findBy({ username }).first()
			// if (!user) {
			// 	return res.status(401).json(authError)
			// }

			// const passwordValid = await bcrypt.compare(password, user.password)
			// if (!passwordValid) {
			// 	return res.status(401).json(authError)
			// }
