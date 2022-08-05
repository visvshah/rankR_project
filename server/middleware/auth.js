import jwt from "jsonwebtoken";

const auth = async (request, response, next) => {
    try {
        const token = request.headers.authorization.split(" ")[1];
        
        if(!existingUser){
            return response.status(404).json({message: "Email not found"});
        }
        const isCorrectPassword = await bcrypt.compare(password, existingUser.password);
        if(!isCorrectPassword){
            return response.status(400).json({message: "Wrong Password"});
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"});
        response.status(200).json({result: existingUser, token})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}