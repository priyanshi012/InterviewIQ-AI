import jwt from "jsonwebtoken"

const genToken = async(userId)=>{

  try {

//change
if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in .env") // ✅ clear error
    }
    //..

    const token =jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
      return token;
    
  } catch (error) {
    console.log(error)
  }
}
export default genToken