const jwt = require("jsonwebtoken");

async function restricted( req,res,next ) {
   try {
      const token = req.headers.authorization

      if(!token) {
         return res.status(401).json({ message: "No Token"})
      }
      // jwt.verify(token, secretOrPublicKey,[options, callback])
      jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
         if(err){
            return res.status(401).json({ message:"Invalid Credentials"})
         }
         req.token = decoded
         next()
      })
   } catch(err) {
      next(err)
   }
}

// async function restricted(req, res, next) {
//   try {
//     const decoded = jwt.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     const user = await users.getUserById(decoded.subject);
//     if (!user) throw new Error();
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "you shall not pass!!" });
//   }
// }

module.exports = restricted;
