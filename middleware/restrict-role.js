function restrictRole(role){
    return (req, res, next) =>{
        if (req.token && req.token.userRole === role){
            // authorized
            next()
        } else {
            return res.status(403).json({
                message: "you are not allowed here"
            })
        }
    }
}

module.exports = restrictRole